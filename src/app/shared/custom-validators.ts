import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegex = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/;
  const value = control.value;
  const result = emailRegex.test(value);

  if (!result) {
    return {emailValidator: {value}};
  }
  return null;
}

export function rangeValidator(minValue: number, maxValue: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = +control.value;

    if (isNaN(value)) return {rangeValidator: {value}};
    if (value < minValue) return {minRange: {value}};
    if (value > maxValue) return {maxRange: {value}};

    return null;
  }
}

export function observableUrlValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const value = control.value;
  const result = urlRegex.test(value);

  if (result) return of(null).pipe(delay(5000));
  return of({urlNotAllowed: {value}}).pipe(delay(5000));
}
