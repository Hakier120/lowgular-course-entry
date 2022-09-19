import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import {CreateEmployeeModel} from '../../model/create-employee.model';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.min(0), Validators.required]),
    salary: new FormControl(null, [Validators.required, Validators.minLength(2)]),

  });


  constructor(private _employeeService: EmployeeService) {
  }

  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService.Create({name: form.name, age: form.age, salary: form.salary}).subscribe(
      (response) => {
        console.log(alert("User was succesfully added to the database."))
      }
    );

  }

}
