import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglevolleyballComponent } from './singlevolleyball.component';

describe('SinglevolleyballComponent', () => {
  let component: SinglevolleyballComponent;
  let fixture: ComponentFixture<SinglevolleyballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglevolleyballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglevolleyballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
