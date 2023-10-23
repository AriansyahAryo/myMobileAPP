import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListbaruPage } from './listbaru.page';

describe('ListbaruPage', () => {
  let component: ListbaruPage;
  let fixture: ComponentFixture<ListbaruPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListbaruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
