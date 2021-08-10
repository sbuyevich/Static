/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AchNavComponent } from './ach-nav.component';

describe('AchNavComponent', () => {
  let component: AchNavComponent;
  let fixture: ComponentFixture<AchNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
