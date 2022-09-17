import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserformComponent } from './userform.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [UserformComponent],
  providers: [],
  exports: [UserformComponent]
})
export class UserformComponentModule {
}
