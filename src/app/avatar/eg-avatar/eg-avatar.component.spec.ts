import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgAvatarComponent } from './eg-avatar.component';

describe('EgAvatarComponent', () => {
  let component: EgAvatarComponent;
  let fixture: ComponentFixture<EgAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
