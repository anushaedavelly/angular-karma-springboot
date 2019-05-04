import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../domain/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  submitted = false;
  // form: FormGroup;
  employee = new Employee();
  form: FormGroup = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    text: new FormControl('', [Validators.required, Validators.maxLength(50)])
  });
  constructor(private employeeService: EmployeeService) {
    this.getEmployees();
  }

  ngOnInit() {
  }
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get text() { return this.form.get('text'); }
  onSubmit() {
    this.submitted = true;
    console.log('submitted successfully');
    this.employee.name = this.name.value;
    this.employee.email = this.email.value;
    this.employee.text = this.text.value;
    this.employeeService.createEmployee(this.employee).subscribe(
      (data: Employee) => {
        console.log('created successfully');
      },
      (err: any) => console.log('error')
    );
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (data: Employee[]) => {
        console.log(data);
        console.log('get is successfully');
      },
      (err: any) => console.log('error')
    );
  }

}
