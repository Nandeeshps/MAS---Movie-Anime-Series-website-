import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeComponent } from './anime.component';

describe('AnimeComponent', () => {
  let component: AnimeComponent;
  let fixture: ComponentFixture<AnimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeComponent]
    });
    fixture = TestBed.createComponent(AnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
