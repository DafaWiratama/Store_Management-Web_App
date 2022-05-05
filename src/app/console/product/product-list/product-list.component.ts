import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../../services/loading.service";
import {Product, ProductService} from "../../../services/product.service";
import {ProductStockAddComponent} from "../product-stock-add/product-stock-add.component";
import {MatDialog} from "@angular/material/dialog";
import {firstValueFrom, map, Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]> = this.product_service.getProducts().pipe(map(products => {
    this.is_loading = false;
    this.max_page = Math.ceil(products.length / this.n_product_per_page)
    return products
  }))
  is_loading: boolean = true
  page = 1
  n_product_per_page = 64
  max_page = 1

  selected_product: Product | null = null
  selected_index : number | null = null

  async setSelected(product:Product){
    this.selected_product = product
  }

  constructor(private loading_service: LoadingService, public product_service: ProductService, private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  onNextPage() {
    this.page++
  }

  onPreviousPage() {
    this.page--
    if (this.page < 1) {
      this.page = 1
    }
  }

  onStockManagement(product: Product) {
    const ref = this.dialog.open(ProductStockAddComponent, {data: {product: product}, width: '720px'})
  }

  onActivateProduct(product: Product) {
    this.loading_service.show()
    this.product_service.setActive(product.id, true).then(() => {
      product.active = true
      this.selected_product = product
      this.loading_service.hide()
    })
  }

  onDeactivateProduct(product: Product) {
    this.loading_service.show()
    this.product_service.setActive(product.id, false).then(()=>{
      product.active = false
      this.selected_product = product
      this.loading_service.hide()
    })
  }
}

