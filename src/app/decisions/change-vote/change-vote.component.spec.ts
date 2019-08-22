import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeVoteComponent } from './change-vote.component';

describe('ChangeVoteComponent', () => {
  let component: ChangeVoteComponent;
  let fixture: ComponentFixture<ChangeVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
