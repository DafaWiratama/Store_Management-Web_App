import {Component, Directive, ElementRef, OnInit} from '@angular/core';
import {Product, ProductService} from "../../services/product.service";
import {combineLatest, delay, map, merge, Observable, reduce, Subject} from "rxjs";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: Subject<Product[]> = new Subject()
  keyword: Subject<string> = new Subject()
  filtered_products: Product[] = []

  basket: any[] = []


  constructor(private product_service: ProductService) {
    combineLatest(this.products.asObservable(), this.keyword.asObservable()).subscribe(
      ([products, keyword]) => {
        this.filtered_products = products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()))
      }
    )

  }

  ngOnInit(): void {
    this.product_service.getProducts().subscribe((data) => {
      this.products.next(data)
      this.filtered_products = data
    })
  }

  onAddProduct(product: Product) {
    let is_on_basket = this.basket.find(item => item.product.name == product.name)

    if (is_on_basket) {
      is_on_basket.quantity += 1
    } else {
      this.basket.push({product: product, quantity: 1})
    }
    this.keyword.next('')
  }
}
