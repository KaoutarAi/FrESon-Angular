import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiqueCardsComponent } from './musique-cards.component';

describe('MusiqueCardsComponent', () => {
  let component: MusiqueCardsComponent;
  let fixture: ComponentFixture<MusiqueCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusiqueCardsComponent]
    });
    fixture = TestBed.createComponent(MusiqueCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
