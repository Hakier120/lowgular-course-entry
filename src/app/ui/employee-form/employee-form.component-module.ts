import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeFormComponent],
  providers: [],
  exports: [EmployeeFormComponent]
})
export class EmployeeFormComponentModule {
}
