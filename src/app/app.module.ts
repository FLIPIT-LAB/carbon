import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoansComponent } from './components/loans/loans.component';
import { MediaComponent } from './components/media/media.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PhysicalCardCampaignComponent } from './components/physical-card-campaign/physical-card-campaign.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SavingsComponent } from './components/savings/savings.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HiringProcessComponent } from './components/hiring-process/hiring-process.component';
import { CreditReportComponent } from './components/credit-report/credit-report.component';
import { CareersComponent } from './components/careers/careers.component';
import { CarbonAccountComponent } from './components/carbon-account/carbon-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CardsComponent,
    ContactUsComponent,
    LoansComponent,
    MediaComponent,
    PaymentsComponent,
    PhysicalCardCampaignComponent,
    PrivacyPolicyComponent,
    SavingsComponent,
    TermsAndConditionsComponent,
    CustomersComponent,
    HiringProcessComponent,
    CreditReportComponent,
    CareersComponent,
    CarbonAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
