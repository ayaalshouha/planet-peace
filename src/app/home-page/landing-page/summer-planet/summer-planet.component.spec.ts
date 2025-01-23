import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerPlanetComponent } from './summer-planet.component';

describe('SummerPlanetComponent', () => {
  let component: SummerPlanetComponent;
  let fixture: ComponentFixture<SummerPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummerPlanetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
