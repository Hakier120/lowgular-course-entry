import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {ApiResponse} from "./api.response";


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

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<EmployeeResponse[]>): PersonModel[] => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            mail: employeeResponse.employee_name,
            img: employeeResponse.profile_image,
            personalNumber: employeeResponse.id,
            id: employeeResponse.id,
          }
        })
      })
    )
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map(() => void 0))
  }
}

