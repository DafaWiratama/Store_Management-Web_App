import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../../services/product.service";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
