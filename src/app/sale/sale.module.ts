import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { TemplateComponent } from './template/template.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {A11yModule} from "@angular/cdk/a11y";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    MatDividerModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    FormsModule,
    A11yModule,
    MatIconModule,
  ]
})
export class SaleModule { }
