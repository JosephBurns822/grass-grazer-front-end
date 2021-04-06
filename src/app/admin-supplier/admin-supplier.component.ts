import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RestServiceService} from '../rest-service.service';

@Component({
  selector: 'app-admin-supplier',
  templateUrl: './admin-supplier.component.html',
  styleUrls: ['./admin-supplier.component.css']
})
export class AdminSupplierComponent implements OnInit {
  supplierList: any[] = [];
  searchResults: any[] = [];

  constructor(
    private rest: RestServiceService
  ) { }

  ngOnInit(): void {
    this.rest.get('supplier')
      .subscribe(
        (next:any) =>{
          console.log(this.supplierList)
        },
        (error) =>{
          console.log(error)
        }
      )
  }

  submit(supplierForm: NgForm) {
    console.log(supplierForm.value, supplierForm.valid);
    this.rest.post('supplier', supplierForm.form.value)
      .subscribe(
        (result) =>{
          console.log(result)
        },
        (error) =>{
          console.log(error)
        }
      )
  }

  search(searchSupplierForm: NgForm) {
    this.searchResults = [];
    console.log(searchSupplierForm)
    for (let i = 0; i < this.supplierList.length; i++) {
      let selected: any = this.supplierList[i];
      if(selected.name.toLowerCase() === searchSupplierForm.form.controls["suppliername"].value.toLowerCase()){
        this.searchResults.push(selected)
      }
    }
  }
}
