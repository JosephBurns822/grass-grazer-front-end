import { Component, OnInit } from '@angular/core';
import {RestServiceService} from '../rest-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-vehicle',
  templateUrl: './admin-vehicle.component.html',
  styleUrls: ['./admin-vehicle.component.css']
})
export class AdminVehicleComponent implements OnInit {

  constructor(
    private rest: RestServiceService
  ) { }

  ngOnInit(): void {
    this.rest.get('vehicle')
      .subscribe(
        (result) =>{
          console.log(result)
        },
        (error) =>{
          console.log(error)
        }
      )
  }

  submit(vehicleForm: NgForm) {
    console.log(vehicleForm.value, vehicleForm.valid);
    this.rest.post('vehicle', vehicleForm.form.value)
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
