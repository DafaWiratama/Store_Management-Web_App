import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TemplateComponent} from "./template/template.component";
import {ProductComponent} from "./product/product.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductListComponent} from "./product/product-list/product-list.component";


const routes: Routes = [
  {
    path: 'Console', component: TemplateComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'Product', component: ProductComponent},
      {path: 'Product/Create', component: ProductCreateComponent},
      {path: 'Product/Manage', component: ProductListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule {
}
