import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface EmployeeResponse {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }


}

