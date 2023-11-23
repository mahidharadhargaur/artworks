import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistContainerComponent } from './artist-container.component';

describe('ArtistContainerComponent', () => {
  let component: ArtistContainerComponent;
  let fixture: ComponentFixture<ArtistContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistContainerComponent]
    });
    fixture = TestBed.createComponent(ArtistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
