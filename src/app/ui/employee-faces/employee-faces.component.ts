import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceArchService } from '../../services/service-arch.service';
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'app-employee-faces',
  templateUrl: './employee-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFacesComponent {
  data$: Observable<PersonModel[] | null> = this._serviceArchService.getAll();
  constructor(private _serviceArchService: ServiceArchService) { }
}
