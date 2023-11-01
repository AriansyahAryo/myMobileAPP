import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestarrayPage } from './testarray.page';

describe('TestarrayPage', () => {
  let component: TestarrayPage;
  let fixture: ComponentFixture<TestarrayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestarrayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
