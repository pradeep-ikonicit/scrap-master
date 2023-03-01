import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSuitePageComponent } from './product-suite-page.component';

describe('ProductSuitePageComponent', () => {
  let component: ProductSuitePageComponent;
  let fixture: ComponentFixture<ProductSuitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSuitePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSuitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
