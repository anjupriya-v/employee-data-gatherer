import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../connector.service';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css'],
})
export class DetailsTableComponent implements OnInit {
  constructor(private service: ConnectorService) {}
  empDetails: any = {
    employeeName: '',
    employeeId: '',
    jobTitle: '',
    email: '',
    phoneNumber: '',
    location: '',
    emergencyContact: '',
  };
  allEmployeeDetails: any = [];
  isDetailsPresent: boolean = false;
  ngOnInit(): void {
    this.service.send.subscribe((employeeDetails: any) => {
      this.empDetails.employeeName = employeeDetails.value.employeeName;
      this.empDetails.employeeId = employeeDetails.value.employeeId;
      this.empDetails.jobTitle = employeeDetails.value.jobTitle;
      this.empDetails.email = employeeDetails.value.email;
      this.empDetails.phoneNumber = employeeDetails.value.phoneNumber;
      this.empDetails.location = employeeDetails.value.location;
      this.empDetails.emergencyContact = employeeDetails.value.emergencyContact;
      this.allEmployeeDetails.push(Object.assign({}, this.empDetails));
      length = this.allEmployeeDetails.reduce((count: number) => count + 1, 0);
      if (length > 0) {
        this.isDetailsPresent = true;
      } else {
        this.isDetailsPresent = false;
      }
    });
  }
}
