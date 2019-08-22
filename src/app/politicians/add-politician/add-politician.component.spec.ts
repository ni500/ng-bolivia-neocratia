import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoliticianComponent } from './add-politician.component';

describe('AddPoliticianComponent', () => {
  let component: AddPoliticianComponent;
  let fixture: ComponentFixture<AddPoliticianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPoliticianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoliticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
