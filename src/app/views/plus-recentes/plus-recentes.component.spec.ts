import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusRecentesComponent } from './plus-recentes.component';

describe('PlusRecentesComponent', () => {
  let component: PlusRecentesComponent;
  let fixture: ComponentFixture<PlusRecentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlusRecentesComponent]
    });
    fixture = TestBed.createComponent(PlusRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
