import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListuserPage } from './listuser.page';

describe('ListuserPage', () => {
  let component: ListuserPage;
  let fixture: ComponentFixture<ListuserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
