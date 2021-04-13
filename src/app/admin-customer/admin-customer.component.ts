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
        (next:any) =>{
          this.customerList = next;
          console.log(this.customerList)
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
    this.searchResults = []
    console.log(searchCustomerForm)
    for (let i = 0; i < this.customerList.length; i++) {
      let selected: any = this.customerList[i];
      if(
        (selected.customerlastname.toLowerCase().includes(searchCustomerForm.form.controls["customerlastname"].value.toLowerCase()) && searchCustomerForm.form.controls["customerlastname"].value != "") ||
        (selected.customerfirstname.toLowerCase().includes(searchCustomerForm.form.controls["customerfirstname"].value.toLowerCase()) && searchCustomerForm.form.controls["customerfirstname"].value != "") ||
        (selected.customerphonenumber.toLowerCase().includes(searchCustomerForm.form.controls["customerphonenumber"].value.toLowerCase()) && searchCustomerForm.form.controls["customerphonenumber"].value != "") ||
        (selected.customeraddress1.toLowerCase().includes(searchCustomerForm.form.controls["customeraddress1"].value.toLowerCase()) && searchCustomerForm.form.controls["customeraddress1"].value != "") ||
        (selected.customeraddress2.toLowerCase().includes(searchCustomerForm.form.controls["customeraddress2"].value.toLowerCase()) && searchCustomerForm.form.controls["customeraddress2"].value != "") ||
        (selected.customerbusinessname.toLowerCase().includes(searchCustomerForm.form.controls["customerbusinessname"].value.toLowerCase()) && searchCustomerForm.form.controls["customerbusinessname"].value != "") ||
        (selected.customerbusinessname.toLowerCase().includes(searchCustomerForm.form.controls["customeremailaddress"].value.toLowerCase()) && searchCustomerForm.form.controls["customeremailaddress"].value != "") ||
        selected.customerpropertyviewing == searchCustomerForm.form.controls["customerpropertyviewing"].value && searchCustomerForm.form.controls["customerpropertyviewing"].value != ""){
        this.searchResults.push(selected)
      }
    }
  }
}
