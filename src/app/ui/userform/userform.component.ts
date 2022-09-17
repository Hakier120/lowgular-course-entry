import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserformComponent {
  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl(),
    age: new FormControl(),
    salary: new FormControl()
  });

  onButtonclicked() {
    alert('User was successfully added to the database')
  }
}
