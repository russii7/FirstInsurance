import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { BusinessInComponent } from './insurance/business-in/business-in.component';
import { CarInComponent } from './insurance/car-in/car-in.component';
import { HealthInComponent } from './insurance/health-in/health-in.component';
import { HomeInComponent } from './insurance/home-in/home-in.component';
import { HomeloanComponent } from './insurance/homeloan/homeloan.component';
import { LifeInComponent } from './insurance/life-in/life-in.component';
import { TravelInComponent } from './insurance/travel-in/travel-in.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {path:'homeloan',component:HomeInComponent},
  {path:'business',component:BusinessInComponent},
  {path:"health",component:HealthInComponent},
  {path:'travel',component:TravelInComponent},
  {path:'car',component:CarInComponent},
  {path:'life',component:LifeInComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:HomeInComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
