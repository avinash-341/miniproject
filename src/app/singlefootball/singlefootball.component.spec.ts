import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefootballComponent } from './singlefootball.component';

describe('SinglefootballComponent', () => {
  let component: SinglefootballComponent;
  let fixture: ComponentFixture<SinglefootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglefootballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglefootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
