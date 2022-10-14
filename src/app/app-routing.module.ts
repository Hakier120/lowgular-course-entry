import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './ui/employee-list/employee-list.component';
import {UserformComponent} from './ui/userform/userform.component';
import {EmployeeListComponentModule} from './ui/employee-list/employee-list.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {UserformComponentModule} from './ui/userform/userform.component-module';


const routes: Routes = [{path: 'employee-list', component: EmployeeListComponent}, {
  path: 'create-employee', component: UserformComponent
}]


@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeServiceModule, UserformComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
