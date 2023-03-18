import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CricketComponent } from './pages/cricket/cricket.component';
import { FootballComponent } from './pages/football/football.component';
import { VolleyballComponent } from './pages/volleyball/volleyball.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SingleComponent } from './pages/single/single.component';
import { SinglefootballComponent } from './singlefootball/singlefootball.component';
import { SinglevolleyballComponent } from './singlevolleyball/singlevolleyball.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ContactComponent,
    CricketComponent,
    FootballComponent,
    VolleyballComponent,
    HomeComponent,
    FooterComponent,
    SingleComponent,
    SinglefootballComponent,
    SinglevolleyballComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
