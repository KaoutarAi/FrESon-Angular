import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusVuesComponent } from './plus-vues.component';

describe('PlusVuesComponent', () => {
  let component: PlusVuesComponent;
  let fixture: ComponentFixture<PlusVuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlusVuesComponent]
    });
    fixture = TestBed.createComponent(PlusVuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
