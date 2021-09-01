import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidators {
  static matchOldPassword(control: AbstractControl): ValidationErrors | null {
    if((control.value as string) == "abc") return null; //stand in for a db check on password match
    return { matchOldPassword: true }
  }

  static passwordPattern(control: AbstractControl): ValidationErrors | null {
    const regex = new RegExp("[a-zA-Z]"); //good enough for a tut
    if((control.value as string).match(regex)) return null;
    return { passwordPattern: true }
  }

  static matchNewPassword: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let newPassword = group.get('newPassword')?.value;
    let confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { matchNewPassword: true }
  }
}