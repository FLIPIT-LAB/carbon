import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalCardCampaignComponent } from './physical-card-campaign.component';

describe('PhysicalCardCampaignComponent', () => {
  let component: PhysicalCardCampaignComponent;
  let fixture: ComponentFixture<PhysicalCardCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalCardCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalCardCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
