import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeListComponentModule} from "./ui/employee-list/employee-list.component-module";

import {EmployeeServiceModule} from "./services/employee.service-module";
import {UserformComponentModule} from "./ui/userform/userform.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeeServiceModule,
    UserformComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
