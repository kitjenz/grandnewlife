import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicComponent } from './pages/clinic/clinic.component';
import { HomeComponent } from './pages/home/home.component';
import { IdHospitalComponent } from './pages/id-hospital/id-hospital.component';
import { NanHospitalComponent } from './pages/nan-hospital/nan-hospital.component';
import { ServicesComponent } from './pages/services/services.component';
import { ViewHospitalComponent } from './pages/view-hospital/view-hospital.component';
import { BanobagiHospitalComponent } from './pages/banobagi-hospital/banobagi-hospital.component';
import { EtonneHospitalComponent } from './pages/etonne-hospital/etonne-hospital.component';
import { EuHospitalComponent } from './pages/eu-hospital/eu-hospital.component';
import { NoseSurgeryComponent } from './pages/nose-surgery/nose-surgery.component';
import { FacialNoneSurgeryComponent } from './pages/facial-none-surgery/facial-none-surgery.component';

const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "clinic", component:ClinicComponent},
  { path: "services", component:ServicesComponent},
  { path: "id-hospital", component: IdHospitalComponent},
  { path: "nana-hospital", component: NanHospitalComponent},
  { path: "view-hospital", component: ViewHospitalComponent},
  { path: "banobagi-hospital", component: BanobagiHospitalComponent },
  { path: "etonne-hospital", component: EtonneHospitalComponent },
  { path: "eu-hospital", component: EuHospitalComponent },
  { path: "nose-surgery", component: NoseSurgeryComponent },
  { path: "facial-none-surgery", component: FacialNoneSurgeryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
