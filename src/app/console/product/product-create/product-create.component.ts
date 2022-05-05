import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingService} from "../../../services/loading.service";
import {ProductService} from "../../../services/product.service";
import {RouterService} from "../../../services/router.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product_form = new FormGroup({
    name: new FormControl('Product 01', [Validators.required]),
    desc: new FormControl('Product Description'),
    price: new FormControl(10000, [Validators.required]),
    sku: new FormControl('Item'),
  });

  constructor(private loading_service: LoadingService, private product_service: ProductService, private router: Router, private active_route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onCreateProduct() {
    if (this.product_form.valid) {
      this.loading_service.show();

      this.product_service.create(this.product_form.value).then(() => {
        this.router.navigate(['../Manage'], {relativeTo: this.active_route});
        this.loading_service.closeWithSnackbar('Product Created');
      }).catch((e) => {
        this.loading_service.closeWithSnackbar('Product Creation Failed', e.data.message);
      });
    }
  }
}
