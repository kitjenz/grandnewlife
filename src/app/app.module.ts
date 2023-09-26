import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './page-components/footer/footer.component';
import { PriNavComponent } from './page-components/pri-nav/pri-nav.component';
import { ClinicComponent } from './pages/clinic/clinic.component';
import { ServicesComponent } from './pages/services/services.component';
import { SecNavComponent } from './page-components/sec-nav/sec-nav.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { IdHospitalComponent } from './pages/id-hospital/id-hospital.component';
import { NanHospitalComponent } from './pages/nan-hospital/nan-hospital.component';
import { ViewHospitalComponent } from './pages/view-hospital/view-hospital.component';
import { BanobagiHospitalComponent } from './pages/banobagi-hospital/banobagi-hospital.component';
import { EuHospitalComponent } from './pages/eu-hospital/eu-hospital.component';
import { EtonneHospitalComponent } from './pages/etonne-hospital/etonne-hospital.component';
import { NoseSurgeryComponent } from './pages/nose-surgery/nose-surgery.component';
import { FacialNoneSurgeryComponent } from './pages/facial-none-surgery/facial-none-surgery.component';
import { EyelidSurgeryComponent } from './pages/eyelid-surgery/eyelid-surgery.component';
import { FaceliftSurgeryComponent } from './pages/facelift-surgery/facelift-surgery.component';
import { NewsComponent } from './pages/news/news.component';
import { Popnosesurgery2023Component } from './pages/popnosesurgery2023/popnosesurgery2023.component';
import { DoubleEyelidsSurgeryComponent } from './pages/double-eyelids-surgery/double-eyelids-surgery.component';
import { KoreaselfsergeryVsAgencysergeryComponent } from './pages/koreaselfsergery-vs-agencysergery/koreaselfsergery-vs-agencysergery.component';
import { SafeBreastSurgeryComponent } from './pages/safe-breast-surgery/safe-breast-surgery.component';
import { TrendKoreasurgery2023Component } from './pages/trend-koreasurgery2023/trend-koreasurgery2023.component';
import { Top6hospitalsurgeryComponent } from './pages/top6hospitalsurgery/top6hospitalsurgery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PriNavComponent,
    ClinicComponent,
    ServicesComponent,
    SecNavComponent,
    HospitalsComponent,
    IdHospitalComponent,
    NanHospitalComponent,
    ViewHospitalComponent,
    BanobagiHospitalComponent,
    EuHospitalComponent,
    EtonneHospitalComponent,
    NoseSurgeryComponent,
    FacialNoneSurgeryComponent,
    EyelidSurgeryComponent,
    FaceliftSurgeryComponent,
    NewsComponent,
    Popnosesurgery2023Component,
    DoubleEyelidsSurgeryComponent,
    KoreaselfsergeryVsAgencysergeryComponent,
    SafeBreastSurgeryComponent,
    TrendKoreasurgery2023Component,
    Top6hospitalsurgeryComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
