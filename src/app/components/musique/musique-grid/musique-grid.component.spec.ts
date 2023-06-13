import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiqueGridComponent } from './musique-grid.component';

describe('MusiqueGridComponent', () => {
  let component: MusiqueGridComponent;
  let fixture: ComponentFixture<MusiqueGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusiqueGridComponent]
    });
    fixture = TestBed.createComponent(MusiqueGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
