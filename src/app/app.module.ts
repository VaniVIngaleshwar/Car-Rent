import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { CarsAvailableComponent } from './cars-available/cars-available.component';
import { HomeComponent } from './home/home.component';
import { VehiclePoliciesComponent } from './vehicle-policies/vehicle-policies.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { ReviewComponent } from './review/review.component';
import { BookingComponent } from './booking/booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule,FormBuilder,Validators  } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { Home2Component } from './home2/home2.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignUpComponent,
    LogInComponent,
    CarsAvailableComponent,
    HomeComponent,
    VehiclePoliciesComponent,
    HelpSupportComponent,
    ReviewComponent,
    BookingComponent,
    FooterComponent,
    Home2Component,
    ViewbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
HttpClientModule,
FormsModule,
ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
