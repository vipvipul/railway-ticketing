import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainSearchComponent } from './train-search.component';

describe('TrainSearchComponent', () => {
  let component: TrainSearchComponent;
  let fixture: ComponentFixture<TrainSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
