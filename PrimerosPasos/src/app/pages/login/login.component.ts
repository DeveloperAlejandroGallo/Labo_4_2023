import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import Toastify from 'toastify-js'
// import "toastify-js/src/toastify.css"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  user!: User;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailL: ['', [Validators.required, Validators.email]],
      passwordL: ['', Validators.required]
    });

    this.signUpForm = this.formBuilder.group({
      emailS: ['', [Validators.required, Validators.email]],
      passwordS: ['', Validators.required],
      passwordRep: ['', Validators.required],
    });

  }


  onSubmitSignUp() {
    let email = this.signUpForm.get('emailS')?.value;
    let password = this.signUpForm.get('passwordS')?.value;

    let usrBD: User = this.getUser(email);

    if(usrBD != null)
    {
      Toastify({
        text: "El usuario ya se encuentra registrado",
        position: "center",
        className: "error",
      }).showToast();
      return;
    }

    if(password != this.signUpForm.get('passwordRep')?.value)
    {
      Toastify({
        text: "Las contraseñas son distintas ",
        position: "center",
        className: "error",
      }).showToast();
      return;
    }

    this.user = new User(email, password);

    localStorage.setItem(email, JSON.stringify(this.user));
    Toastify({
      text: "Usuario dado de alta correctamente",
      position: "center",
      className: "info",
      // style: {
      //   background: "linear-gradient(to right, #00b09b, #96c93d)",
      // }
    }).showToast();

  }

  onSubmitLogin() {
    let email = this.loginForm.get('emailL')?.value;
    let password = this.loginForm.get('passwordL')?.value;

    let usrBD: User = this.getUser(email);
    if (usrBD == null || usrBD.name != email || usrBD.password != password)
    {
      Toastify({
        text: "Usuario o contraseña erroneos",
        className: "error",
        position: "center",
      }).showToast();
      return;
    }


    Toastify({
      text: "Bienvenido " + usrBD.name,
      className: "info",
      position: "center",
    }).showToast();

    this.router.navigate(['/home']);
  }

  getUser(email: string): User {
    const usr = localStorage.getItem(email);
    return usr ? JSON.parse(usr) : null;
  }





}
