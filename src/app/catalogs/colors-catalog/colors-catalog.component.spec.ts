import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsCatalogComponent } from './colors-catalog.component';

describe('ColorsCatalogComponent', () => {
  let component: ColorsCatalogComponent;
  let fixture: ComponentFixture<ColorsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
