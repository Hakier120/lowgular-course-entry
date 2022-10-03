import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserformComponent {
  readonly userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl()
  });

  constructor(private _employeeService: EmployeeService) {
  }

  OnButtonClicked(form: { email: string, age: string, name: string }) {
    alert('User was succesfully added to the database.' + ' Email: ' + form.email + 'Age' + form.age + 'Name' + form.name)
  }
}
