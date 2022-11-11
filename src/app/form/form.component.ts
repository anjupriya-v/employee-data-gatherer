import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConnectorService } from '../connector.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formDirective: any;
  constructor(
    private service: ConnectorService,
    private toast: ToastrService
  ) {}
  employeeDetails = new FormGroup({
    employeeName: new FormControl('', Validators.required),
    employeeId: new FormControl('', Validators.required),
    jobTitle: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    emergencyContact: new FormControl('', Validators.required),
  });
  get f() {
    return this.employeeDetails.controls;
  }

  submitted: boolean = false;
  onSubmit(formDirective: FormGroupDirective) {
    this.submitted = true;
    this.service.sendDetails(this.employeeDetails);
    this.toast.success('Employee details added', 'woohoo!');
    if (this.employeeDetails.valid) {
      formDirective.resetForm();
      this.employeeDetails.reset();
      this.submitted = false;
    }
  }
}
