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
