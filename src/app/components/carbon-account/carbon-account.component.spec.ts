import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonAccountComponent } from './carbon-account.component';

describe('CarbonAccountComponent', () => {
  let component: CarbonAccountComponent;
  let fixture: ComponentFixture<CarbonAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbonAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
