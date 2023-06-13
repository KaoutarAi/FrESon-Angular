import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisMusiquesComponent } from './favoris-musiques.component';

describe('FavorisMusiquesComponent', () => {
  let component: FavorisMusiquesComponent;
  let fixture: ComponentFixture<FavorisMusiquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavorisMusiquesComponent]
    });
    fixture = TestBed.createComponent(FavorisMusiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
