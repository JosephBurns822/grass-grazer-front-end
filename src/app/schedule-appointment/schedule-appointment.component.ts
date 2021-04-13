import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RestServiceService} from '../rest-service.service';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {

  constructor(
    private rest: RestServiceService
  ) { }

  ngOnInit(): void {
    this.rest.get('appointment')
      .subscribe(
        (result) =>{
          console.log(result)
        },
        (error) =>{
          console.log(error)
        }
      )
  }

  submit(appointmentForm: NgForm) {
    console.log(appointmentForm.value, appointmentForm.valid);
    this.rest.post('appointment', appointmentForm.form.value)
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
