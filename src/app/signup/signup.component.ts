import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ValidatorService } from 'app/shared/services/validator/validator.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean;
  validatorResult: string;

  public alerts: Array<any> = [];
  public errorRequired: Array<any> = [];
  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) {}

  ngOnInit() {
    this.submitted = false;
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$'), Validators.minLength(8)]],
      rPassword: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$'), Validators.minLength(8)]]
    });
  }
  // Este metodo es una práctica para usar en el HTML con el prefijo 'f'
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.closeAlert(alert);
    if (this.registerForm.invalid) {
      this.validatorResult = this.validatorService.genericValidator(this.registerForm.controls.fullName);

      if (null != this.registerForm.controls.fullName.errors) {
        if (this.validatorResult === 'required') {
          this.alerts.push(
            {
              type: 'danger',
              message: `Input Full Name es requerido`
            }
          );
        }
        if (this.validatorResult === 'formatInvalid') {
          this.alerts.push(
            {
              type: 'warning',
              message: `Input Full Name con formato incorrecto`
            }
          );
        }
      }
    }
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
