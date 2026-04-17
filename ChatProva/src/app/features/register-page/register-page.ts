import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '../../domain/auth.api';
import { Router } from '@angular/router';
import { RegisterDto } from '../../domain/interfaces/registerInterface';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  constructor(
    private api : AuthApi,
    private router: Router
  ){ }
  
  registerForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthday: new FormControl('', [Validators.required])
  })

  get Username(){
    return this.registerForm.get("username")
  }

  get Password(){
    return this.registerForm.get("password")
  }

  get Phone(){
    return this.registerForm.get("phone")
  }

  get Birthday(){
    return this.registerForm.get("birthday")
  }

  get Email(){
    return this.registerForm.get("email")
  }

  subscribe = () => {
    if(!this.registerForm.valid)
    {
      alert("Nem todos os campos são validos!");
      return
    };
  
    const data: RegisterDto = {
        password: this.Password?.value,
        username: this.Username?.value,
        phone: this.Phone?.value,
        email: this.Email?.value,
        birthday: this.Birthday?.value
    }

    this.api.subscribe(data).subscribe(
      res => {
        sessionStorage.setItem("token", res);
        this.router.navigate(['']);
      }
    );
  }


  formAction = () => {
      return this.subscribe();
  }


}
