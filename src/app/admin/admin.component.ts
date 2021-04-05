import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private rest: RestServiceService
  ) { }

  ngOnInit(): void {
    this.rest.get('employees')
      .subscribe(
        (result) =>{
          console.log(result)
        },
        (error) =>{
          console.log(error)
        }
      )
  }

  submit(employeeForm: NgForm) {
    console.log(employeeForm.value, employeeForm.valid);
    console.log(employeeForm.form.value);
    this.rest.post('employees', employeeForm.form.value)
      .subscribe(
        (result) =>{
          console.log(result)
        },
        (error) =>{
          console.log(error)
        }
      )
  }
}

