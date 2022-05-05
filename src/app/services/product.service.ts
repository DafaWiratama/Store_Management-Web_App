import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) {
  }

  async getNewId() {
    const time = new Date()
    let prefix = `P${time.getFullYear()}${time.getMonth().toString().padStart(2, '0')}`
    let products = await firstValueFrom(this.getProducts()).then(products => products.filter(product => String(product.id).startsWith(prefix)))
    let id = prefix + (products.length + 1).toString().padStart(3, '0')
    return id
  }

  async create(product: ProductForm) {
    let payload = product as Product;
    payload.created = new Date();
    payload.price = 0
    payload.qty = 0;
    payload.id = await this.getNewId()
    payload.value = 0
    payload.active = true

    return this.firestore.collection('products').doc(payload.id.toString()).set(payload)
  }

  getProducts() {
    return this.firestore.collection('products').valueChanges() as Observable<Product[]>;
  }

  setActive(id: string, active: boolean) {
    return this.firestore.collection('products').doc(id.toString()).update({active: active})
  }

  async addStock(id: string, qty: number, value: number) {
    const product = (await firstValueFrom(this.firestore.collection('products').doc(id.toString()).get())).data() as Product
    const newQty = product.qty + qty
    if (newQty < 0) {
      return Promise.reject('Stock cannot be negative')
    }
    return this.firestore.collection('products').doc(id.toString()).update({qty: newQty, value: product.value + value})
  }

}

export interface Product {
  active: boolean;
  id: string;
  name: string;
  price: number;
  qty: number;
  sku: string;
  value: number;
  created: Date;
}

interface ProductForm {
  name: string;
  price: number;
}
