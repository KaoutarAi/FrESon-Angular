import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicsTableComponent } from './musics-table.component';

describe('MusicsTableComponent', () => {
  let component: MusicsTableComponent;
  let fixture: ComponentFixture<MusicsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicsTableComponent]
    });
    fixture = TestBed.createComponent(MusicsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
