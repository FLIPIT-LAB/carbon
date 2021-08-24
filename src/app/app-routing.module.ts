import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CarbonAccountComponent } from './components/carbon-account/carbon-account.component';
import { CardsComponent } from './components/cards/cards.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CreditReportComponent } from './components/credit-report/credit-report.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HiringProcessComponent } from './components/hiring-process/hiring-process.component';
import { HomeComponent } from './components/home/home.component';
import { LoansComponent } from './components/loans/loans.component';
import { MediaComponent } from './components/media/media.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PhysicalCardCampaignComponent } from './components/physical-card-campaign/physical-card-campaign.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SavingsComponent } from './components/savings/savings.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';


const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"home", component: HomeComponent },
  { path:"about", component: AboutComponent },
  { path:"cards", component: CardsComponent },
  { path:"carbon-account", component: CarbonAccountComponent },
  { path:"careers", component: CareersComponent },
  { path:"contact-us", component: ContactUsComponent },
  { path:"credit-report", component: CreditReportComponent },
  { path:"customers", component: CustomersComponent },
  { path:"hiring-process", component: HiringProcessComponent },
  { path:"loans", component: LoansComponent },
  { path:"media", component: MediaComponent },
  { path:"payments", component: PaymentsComponent },
  { path:"physical-card-campaign", component: PhysicalCardCampaignComponent },
  { path:"privacy-policy", component: PrivacyPolicyComponent },
  { path:"savings", component: SavingsComponent },
  { path:"terms-and-conditions", component: TermsAndConditionsComponent },

  { path:"**", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
