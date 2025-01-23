import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendigCategoriesComponent } from './trendig-categories.component';

describe('TrendigCategoriesComponent', () => {
  let component: TrendigCategoriesComponent;
  let fixture: ComponentFixture<TrendigCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendigCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendigCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
