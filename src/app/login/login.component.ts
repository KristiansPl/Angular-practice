import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
/* import { RegistrationService } from '../registration.service'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted = false;

  constructor(private fb: FormBuilder, private _userService: UserService, private router: Router){

  }

  get userName(){
    return this.loginForm.controls.userName;
  }

  get password(){
    return this.loginForm.controls.password;
  }

  public loginForm = this.fb.group( {
    userName: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/admin/)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
    popup: [false, Validators.required]
  });

  /* registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  }); */

  sendValueIntoUserService(value: string, value2: string, value3: boolean) {
    this._userService.setUserData(value, value2, value3);
  }

  loadApiData(){
    this.loginForm.patchValue({
      userName: 'Gunārs',
      password: 'Benārs6444',
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.userName.value && this.password.value && (this.loginForm.controls.popup.value || this.loginForm.controls.popup.value === false)){
      this.sendValueIntoUserService(this.userName.value, this.password.value , this.loginForm.controls.popup.value );
    }
    if (this.loginForm.controls.popup.value){
      alert("Hello " + this.userName.value);
    }
    this.router.navigate(['profile']);
    /* this._registrationService.register(this.registrationForm.value).subscribe({
      next: response=>console.log(response),
      error: error => console.log('error')
  }); */
  }
}
