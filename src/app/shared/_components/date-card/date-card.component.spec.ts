import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCardComponent } from './date-card.component';

describe('DateCardComponent', () => {
  let component: DateCardComponent;
  let fixture: ComponentFixture<DateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
