import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDetailsComponent } from './anime-details.component';

describe('AnimeDetailsComponent', () => {
  let component: AnimeDetailsComponent;
  let fixture: ComponentFixture<AnimeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeDetailsComponent]
    });
    fixture = TestBed.createComponent(AnimeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
