import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RestServiceService} from '../rest-service.service';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {
  customerList: any[] = [];
  searchResults: any[] = [];

  constructor(
    private rest: RestServiceService
  ) { }

  ngOnInit(): void {
    this.rest.get('customer')
      .subscribe(
        (result) =>{
          console.log(result)
        },
        (error) =>{
          console.log(error)
        }
      )
  }

  submit(customerForm: NgForm) {
    console.log(customerForm.value, customerForm.valid);
    this.rest.post('customer', customerForm.form.value)
      .subscribe(
        (result) =>{
          console.log(result)
        },
        (error) =>{
          console.log(error)
        }
      )
  }

  search(searchCustomerForm: NgForm) {
    this.searchResults = [];
    console.log(searchCustomerForm)
    for (let i = 0; i < this.customerList.length; i++) {
      let selected: any = this.customerList[i];
      if(selected.name.toLowerCase() === searchCustomerForm.form.controls["customername"].value.toLowerCase()){
        this.searchResults.push(selected)
      }
    }
  }
}
