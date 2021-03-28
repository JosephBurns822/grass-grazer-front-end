import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private rest: RestServiceService;

  constructor() {

  }

  ngOnInit() {
  }

  submit(employeeForm: NgForm) {
    console.log(employeeForm.value, employeeForm.valid);
    this.rest.post('course', employeeForm.form.value)
      .subscribe(
        (result) =>{
          console.log(result)
        },
        (error) =>{
          console.log(error)
        }
      )
  }

  // ngOnInit(): void {
  //   this.rest.get('login')
  //     .subscribe(
  //       (result) =>{
  //         console.log(result)
  //       },
  //       (error) =>{
  //         console.log(error)
  //       }
  //     )
  // }
  //
  // submit(emailForm: NgForm) {
  //   console.log(emailForm.value, emailForm.valid);
  //   this.rest.post('login', emailForm.form.value)
  //     .subscribe(
  //       (result) =>{
  //         console.log(result)
  //       },
  //       (error) =>{
  //         console.log(error)
  //       }
  //     )
  // }
}
