import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  get form(){
    return this.passwordForm;
  }

  passwordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required, PasswordValidators.matchOldPassword]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8), PasswordValidators.passwordPattern]),
    confirmPassword: new FormControl('', Validators.required)
  },{ validators: PasswordValidators.matchNewPassword })
}
