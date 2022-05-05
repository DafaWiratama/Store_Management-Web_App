import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {firstValueFrom, lastValueFrom, Observable} from "rxjs";
import {ProductService} from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private firestore: AngularFirestore, private productService: ProductService) {
  }

  getList() {
    return this.firestore.collection('transactions').valueChanges() as Observable<Stock[]>
  }

  async createID() {
    const time = new Date()
    const prefix = `S${time.getFullYear()}${time.getMonth().toString().padStart(2, '0')}`
    const items = await firstValueFrom(this.getList()).then(items => items.filter(item => item.id.startsWith(prefix)))
    console.log(items.length)
    return prefix + (items.length + 1).toString().padStart(3, '0')
  }

  async addStock(product_id: string, payload: { qty: number, price: number, note: string }) {
    const stock = payload as Stock
    stock.id = await this.createID()
    stock.product_id = product_id
    return this.firestore.collection('transactions').doc(stock.id).set(stock).then(() => {
      return this.productService.addStock(product_id, payload.qty, payload.price)
    })
  }
}

export interface Stock {
  id: string
  product_id: string
  qty: number
  price: number
  note: string
}
