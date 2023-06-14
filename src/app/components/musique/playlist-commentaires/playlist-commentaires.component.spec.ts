import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCommentairesComponent } from './playlist-commentaires.component';

describe('PlaylistCommentairesComponent', () => {
  let component: PlaylistCommentairesComponent;
  let fixture: ComponentFixture<PlaylistCommentairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistCommentairesComponent]
    });
    fixture = TestBed.createComponent(PlaylistCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
