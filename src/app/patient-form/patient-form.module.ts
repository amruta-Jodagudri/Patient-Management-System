import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientFormComponent } from './patient-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PatientFormComponent],
  imports: [
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
