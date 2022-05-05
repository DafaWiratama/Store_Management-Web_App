import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStockAddComponent } from './product-stock-add.component';

describe('ProductStockAddComponent', () => {
  let component: ProductStockAddComponent;
  let fixture: ComponentFixture<ProductStockAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStockAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStockAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
