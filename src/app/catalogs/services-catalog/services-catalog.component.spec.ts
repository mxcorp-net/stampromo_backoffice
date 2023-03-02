import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCatalogComponent } from './services-catalog.component';

describe('ServicesCatalogComponent', () => {
  let component: ServicesCatalogComponent;
  let fixture: ComponentFixture<ServicesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
