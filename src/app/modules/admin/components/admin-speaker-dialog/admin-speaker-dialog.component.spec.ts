import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpeakerDialogComponent } from './admin-speaker-dialog.component';

describe('AdminSpeakerDialogComponent', () => {
  let component: AdminSpeakerDialogComponent;
  let fixture: ComponentFixture<AdminSpeakerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSpeakerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpeakerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
