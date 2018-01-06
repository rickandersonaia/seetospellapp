import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalnavComponent } from './sidenav.component';

describe('VerticalnavComponent', () => {
  let component: VerticalnavComponent;
  let fixture: ComponentFixture<VerticalnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});