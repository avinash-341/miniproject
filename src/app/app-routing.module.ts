import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CricketComponent } from './pages/cricket/cricket.component';
import { SingleComponent } from './pages/single/single.component';
import { FootballComponent } from './pages/football/football.component';
import { SinglefootballComponent } from './singlefootball/singlefootball.component';
import { SinglevolleyballComponent } from './singlevolleyball/singlevolleyball.component';
import { VolleyballComponent } from './pages/volleyball/volleyball.component';
import { PurchaseComponent } from './purchase/purchase.component';
const routes: Routes = [
  {
    path: 'home',component:HomeComponent
  },
   {
    path: '',component:HomeComponent
  },
  
  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'contact',component:ContactComponent  
  },
  {
    path: 'cricket',component:CricketComponent
  },
  {
    path: 'football',component:FootballComponent
  },
  {
    path: 'volleyball',component:VolleyballComponent
  },
  {
    path: 'single',component:SingleComponent
  },
  {
    path: 'singlefootball',component:SinglefootballComponent
  },
  {
    path: 'singlevolleyball',component:SinglevolleyballComponent
  },
  {
    path: 'purchase',component:PurchaseComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
