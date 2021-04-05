import { Component, OnInit } from '@angular/core';
import {RestServiceService} from '../rest-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-inventory',
  templateUrl: './admin-inventory.component.html',
  styleUrls: ['./admin-inventory.component.css']
})
export class AdminInventoryComponent implements OnInit {

  constructor(
    private rest: RestServiceService
  ) {

  }

  ngOnInit(): void {
    this.rest.get('products')
      .subscribe(
        (result) =>{
          console.log(result)
        },
        (error) =>{
          console.log(error)
        }
      )
  }

  submit(inventoryForm: NgForm) {
    console.log(inventoryForm.value, inventoryForm.valid);
    this.rest.post('products', inventoryForm.form.value)
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
