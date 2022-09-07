import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFacesComponent } from './employee-faces.component';
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeFacesComponent],
  providers: [],
  exports: [EmployeeFacesComponent]
})
export class EmployeeFacesComponentModule {

}
