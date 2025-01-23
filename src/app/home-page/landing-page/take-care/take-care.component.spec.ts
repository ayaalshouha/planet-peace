import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeCareComponent } from './take-care.component';

describe('TakeCareComponent', () => {
  let component: TakeCareComponent;
  let fixture: ComponentFixture<TakeCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
