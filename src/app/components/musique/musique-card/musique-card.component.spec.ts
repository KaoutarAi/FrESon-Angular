import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiqueCardComponent } from './musique-card.component';

describe('MusiqueCardComponent', () => {
  let component: MusiqueCardComponent;
  let fixture: ComponentFixture<MusiqueCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusiqueCardComponent]
    });
    fixture = TestBed.createComponent(MusiqueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
