import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
  standalone:true,
  imports:[FormsModule,CommonModule],
})
export class PatientFormComponent {
  patient={
    name :'',
    dob : '',
    gender : '',
    bloodGroup :'',
    email : '',
    phone : '',
    address : '',
  }
  
  onSubmit(form: any) {
    if (form.invalid) {
      Object.keys(form.controls).forEach((key) => {
        form.controls[key].markAsTouched(); // Corrected method name
      });
      return;
    }
    console.log('Form Submitted:', form.value);
    alert('Form Submitted Successfully!');
    form.reset();
  }
}
