import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsCatalogComponent } from './tags-catalog.component';

describe('TagsCatalogComponent', () => {
  let component: TagsCatalogComponent;
  let fixture: ComponentFixture<TagsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
