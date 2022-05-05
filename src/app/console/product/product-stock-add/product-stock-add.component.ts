import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../../services/product.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingService} from "../../../services/loading.service";
import {InventoryService} from "../../../services/inventory.service";

@Component({
  selector: 'app-product-stock-add',
  templateUrl: './product-stock-add.component.html',
  styleUrls: ['./product-stock-add.component.scss']
})
export class ProductStockAddComponent {

  form = new FormGroup({
    qty: new FormControl(1, [Validators.required, Validators.min(1)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    note: new FormControl(''),
  })

  constructor(
    public dialogRef: MatDialogRef<ProductStockAddComponent>,
    private loading_service: LoadingService,
    private inventory_service: InventoryService,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }) {
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading_service.show();
      this.inventory_service.addStock(this.data.product.id, this.form.value).then(() => {
        this.loading_service.hide();
        this.dialogRef.close();
      })
    }
  }
}
