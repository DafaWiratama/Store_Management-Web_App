import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TemplateComponent} from "./template/template.component";

const routes: Routes = [
  {path: 'Sale', component: TemplateComponent, children: [
    {path: '', component: DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule {
}
