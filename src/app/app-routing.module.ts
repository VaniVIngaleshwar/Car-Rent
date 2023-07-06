import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { CarsAvailableComponent } from './cars-available/cars-available.component';
import { VehiclePoliciesComponent } from './vehicle-policies/vehicle-policies.component';
import { ReviewComponent } from './review/review.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { Home2Component } from './home2/home2.component';
import { BookingComponent } from './booking/booking.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';

const routes: Routes = [
  {path:'',component:SignUpComponent},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LogInComponent},
  {path:'home',component:HomeComponent},
  {path:'car',component:CarsAvailableComponent},
  {path:'vehicle',component:VehiclePoliciesComponent},
  {path:'review',component:ReviewComponent},
  {path:'help',component:HelpSupportComponent},
  {path:'home2',component:Home2Component},
  {path:'booking',component:BookingComponent},
  {path:'view',component:ViewbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
