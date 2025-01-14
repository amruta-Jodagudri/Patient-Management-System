import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Patient } from './patient-form-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
})
export class PatientFormComponent {
  patient = {
    name: '',
    dob: '',
    gender: '',
    bloodGroup: '',
    email: '',
    phone: '',
    address: '',
  };

  patients: Patient[] = [];
  patientModel: Patient = new Patient();

  constructor(private http: HttpClient) {
    this.loadPatients();
  }

  submitPatient() {
    if (this.patientModel) {
      this.http.post('http://localhost:3000/patients', this.patientModel).subscribe({
        next: (res) => {
          console.log('Patient added successfully:', res);
          this.loadPatients();
          this.patientModel = new Patient();
        },
        error: (err) => console.error('Error adding patient:', err),
      });
    }
  }

  loadPatients() {
    this.http.get<Patient[]>('http://localhost:3000/patients').subscribe({
      next: (res) => {
        this.patients = res;
      },
      error: (err) => console.error('Error fetching patients:', err),
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach((key) => {
        const control = form.controls[key];
        control.markAsTouched();
        form.reset();
      });
      return;
    }
    this.submitPatient();
  }
}
