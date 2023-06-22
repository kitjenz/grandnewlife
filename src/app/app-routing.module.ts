import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicComponent } from './pages/clinic/clinic.component';
import { HomeComponent } from './pages/home/home.component';
import { IdHospitalComponent } from './pages/id-hospital/id-hospital.component';
import { NanHospitalComponent } from './pages/nan-hospital/nan-hospital.component';
import { ServicesComponent } from './pages/services/services.component';
import { ViewHospitalComponent } from './pages/view-hospital/view-hospital.component';

const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "clinic", component:ClinicComponent},
  { path: "services", component:ServicesComponent},
  { path: "id-hospital", component: IdHospitalComponent},
  { path: "nana-hospital", component: NanHospitalComponent},
  { path: "view-hospital", component: ViewHospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
