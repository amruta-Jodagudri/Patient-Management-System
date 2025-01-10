import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      alert('Form Submitted Successfully!');
      form.reset();
    } else {
      alert('Please fix the errors in the form.');
    }
  }
}
