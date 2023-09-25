import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MygalleryPage } from './mygallery.page';

describe('MygalleryPage', () => {
  let component: MygalleryPage;
  let fixture: ComponentFixture<MygalleryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MygalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
