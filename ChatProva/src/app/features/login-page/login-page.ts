import { Component } from '@angular/core';
import { AuthApi } from '../../domain/auth.api';
import { Router } from '@angular/router';
import { LoginDto } from '../../domain/interfaces/userInterface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  constructor(
    private api : AuthApi,
    private router: Router
  ){ }
  
  loginForm : FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  get Password(){
    return this.loginForm.get("password")
  }
  
  get Email(){
    return this.loginForm.get("email")
  }

  login = () => {
    if(!this.loginForm.valid)
    {
      alert("Nem todos os campos são validos!");
      return
    };
  
    const data: LoginDto = {
      password: this.Password?.value,
      email: this.Email?.value
    }

    this.api.login(data).subscribe(
      res => {
        sessionStorage.setItem("token", res);
        this.router.navigate(['']);
      }
    );
  }


  formAction = () => {
      return this.login();
  }

}
