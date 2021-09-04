import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheetHomeComponent } from './cheet-home.component';

describe('CheetHomeComponent', () => {
  let component: CheetHomeComponent;
  let fixture: ComponentFixture<CheetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheetHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
