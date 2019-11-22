import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreunionComponent } from './addreunion.component';

describe('AddreunionComponent', () => {
  let component: AddreunionComponent;
  let fixture: ComponentFixture<AddreunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
