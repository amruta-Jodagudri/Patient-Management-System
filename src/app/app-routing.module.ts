import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'patient-form', component: PatientFormComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
