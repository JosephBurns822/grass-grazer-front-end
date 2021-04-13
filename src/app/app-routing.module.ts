import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { LawnServicesComponent } from './lawn-services/lawn-services.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { InformationGuideComponent } from './information-guide/information-guide.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {AdminCustomerComponent} from './admin-customer/admin-customer.component';
import {AdminInventoryComponent} from './admin-inventory/admin-inventory.component';
import {AdminSupplierComponent} from './admin-supplier/admin-supplier.component';
import {AdminVehicleComponent} from './admin-vehicle/admin-vehicle.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product-shop', component: ProductShopComponent},
  {path: 'lawn-services', component: LawnServicesComponent},
  {path: 'schedule-appointment', component: ScheduleAppointmentComponent},
  {path: 'information-guide', component: InformationGuideComponent},
  {path: 'admin-employee', component: AdminComponent},
  {path: 'admin-customer', component: AdminCustomerComponent},
  {path: 'admin-inventory', component: AdminInventoryComponent},
  {path: 'admin-supplier', component: AdminSupplierComponent},
  {path: 'admin-vehicle', component: AdminVehicleComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
