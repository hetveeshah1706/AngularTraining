import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDemoComponent } from './product-demo.component';

describe('ProductDemoComponent', () => {
  let component: ProductDemoComponent;
  let fixture: ComponentFixture<ProductDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
