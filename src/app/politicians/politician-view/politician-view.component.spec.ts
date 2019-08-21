import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianViewComponent } from './politician-view.component';

describe('PoliticianViewComponent', () => {
  let component: PoliticianViewComponent;
  let fixture: ComponentFixture<PoliticianViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticianViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticianViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
