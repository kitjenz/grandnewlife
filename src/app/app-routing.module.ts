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
import { EyelidSurgeryComponent } from './pages/eyelid-surgery/eyelid-surgery.component';
import { FaceliftSurgeryComponent } from './pages/facelift-surgery/facelift-surgery.component';
import { NewsComponent } from './pages/news/news.component';
import { Popnosesurgery2023Component } from './pages/popnosesurgery2023/popnosesurgery2023.component';
import { DoubleEyelidsSurgeryComponent } from './pages/double-eyelids-surgery/double-eyelids-surgery.component';
import { KoreaselfsergeryVsAgencysergeryComponent } from './pages/koreaselfsergery-vs-agencysergery/koreaselfsergery-vs-agencysergery.component';
import { Top6hospitalsurgeryComponent } from './pages/top6hospitalsurgery/top6hospitalsurgery.component';
import { SafeBreastSurgeryComponent } from './pages/safe-breast-surgery/safe-breast-surgery.component';
import { TrendKoreasurgery2023Component } from './pages/trend-koreasurgery2023/trend-koreasurgery2023.component';
import { AgencyKoreaPlasticsurgerychoseComponent } from './pages/agency-korea-plasticsurgerychose/agency-korea-plasticsurgerychose.component';
import { KoreacelebHotfaceComponent } from './pages/koreaceleb-hotface/koreaceleb-hotface.component';
import { JawSurgeryComponent } from './pages/jaw-surgery/jaw-surgery.component';
import { Hot6koreahospitalforplasticsurgeryComponent } from './pages/hot6koreahospitalforplasticsurgery/hot6koreahospitalforplasticsurgery.component';
import { LiftskinDelayagingComponent } from './pages/liftskin-delayaging/liftskin-delayaging.component';
import { KoreaplasticsurgerypriceComponent } from './pages/koreaplasticsurgeryprice/koreaplasticsurgeryprice.component';
import { FaceliftRhytidectomySurgeryComponent } from './pages/facelift-rhytidectomy-surgery/facelift-rhytidectomy-surgery.component';

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
  { path: "eyelid-surgery", component: EyelidSurgeryComponent },
  { path: "facelift-surgery", component: FaceliftSurgeryComponent},
  { path: "news", component: NewsComponent },
  { path: "popnosesurgery2023", component: Popnosesurgery2023Component},
  { path: "double-eyelids-surgery", component: DoubleEyelidsSurgeryComponent},
  { path: "koreaselfsergery-vs-agencysergery", component: KoreaselfsergeryVsAgencysergeryComponent},
  { path: "top6hospitalsurgery", component: Top6hospitalsurgeryComponent},
  { path: "safe-breast-surgery", component: SafeBreastSurgeryComponent},
  { path: "trend-koreasurgery2023", component: TrendKoreasurgery2023Component},
  { path: "agency-korea-plasticsurgerychose", component: AgencyKoreaPlasticsurgerychoseComponent},
  { path: "koreaceleb-hotface", component:  KoreacelebHotfaceComponent},
  { path: "jaw-surgery", component:  JawSurgeryComponent},
  { path: "hot6koreahospitalforplasticsurgery", component:  Hot6koreahospitalforplasticsurgeryComponent},
  { path: "liftskin-delayaging", component:  LiftskinDelayagingComponent},
  { path: "koreaplasticsurgeryprice", component:  KoreaplasticsurgerypriceComponent},
  { path: "facelift-rhytidectomy-surgery", component:  FaceliftRhytidectomySurgeryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
