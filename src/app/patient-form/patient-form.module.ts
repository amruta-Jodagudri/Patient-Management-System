import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientFormComponent } from './patient-form.component';
import { RouterModule } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@NgModule({
  declarations: [PatientFormComponent],
  imports: [
    HttpClient,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PatientFormComponent,
      },
    ]),
  ],
})
export class PatientFormModule {}
