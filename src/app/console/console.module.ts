import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConsoleRoutingModule} from "./console-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ProductComponent} from "./product/product.component";
import {MatButtonModule} from "@angular/material/button";
import { ProductEditorComponent } from './product/product-editor/product-editor.component';
import {MatIconModule} from "@angular/material/icon";
import { ProductStockAddComponent } from './product/product-stock-add/product-stock-add.component';
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
    ProductComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditorComponent,
    ProductStockAddComponent,
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class ConsoleModule { }
