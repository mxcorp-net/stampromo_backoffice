import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersCatalogComponent } from './providers-catalog.component';

describe('ProvidersCatalogComponent', () => {
  let component: ProvidersCatalogComponent;
  let fixture: ComponentFixture<ProvidersCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidersCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
