import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDetailsComponent } from './series-details.component';

describe('SeriesDetailsComponent', () => {
  let component: SeriesDetailsComponent;
  let fixture: ComponentFixture<SeriesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesDetailsComponent]
    });
    fixture = TestBed.createComponent(SeriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
