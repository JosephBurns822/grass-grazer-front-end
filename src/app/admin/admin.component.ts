import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  employeeList: any[] = [];
  searchResults: any[] = [];

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
  search(searchEmployeeForm: NgForm) {
    this.searchResults = [];
    console.log(searchEmployeeForm)
    for (let i = 0; i < this.employeeList.length; i++) {
      let selected: any = this.employeeList[i];
      if(selected.name.toLowerCase() === searchEmployeeForm.form.controls["employeename"].value.toLowerCase()){
        this.searchResults.push(selected)
      }
    }
  }
}

