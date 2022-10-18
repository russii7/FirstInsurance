import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { HomeInComponent } from './insurance/home-in/home-in.component';
import { CarInComponent } from './insurance/car-in/car-in.component';
import { HealthInComponent } from './insurance/health-in/health-in.component';
import { TravelInComponent } from './insurance/travel-in/travel-in.component';
import { LifeInComponent } from './insurance/life-in/life-in.component';
import { BusinessInComponent } from './insurance/business-in/business-in.component';
import { HomeloanComponent } from './insurance/homeloan/homeloan.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    InsuranceComponent,
    HomeInComponent,
    CarInComponent,
    HealthInComponent,
    TravelInComponent,
    LifeInComponent,
    BusinessInComponent,
    HomeloanComponent,
    FormControl
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
