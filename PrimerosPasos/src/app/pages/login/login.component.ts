import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { NotifierComponent } from 'src/app/notifier/notifier.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService
              // ,private notification: NotifierComponent
              ) {
    this.email = '';
    this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        // Si la operación se completó con éxito, redirigimos al usuario a la página principal
        // o a la página que queramos
        console.log('Login exitoso!');
      })
      .catch((error) => {
        // Si se produjo un error, mostramos un mensaje de error al usuario
        console.error(error);
        alert('Hubo un error en el login. Intente nuevamente.');
      });
  }

  logout() {
    this.authService.logout()
      .then(() => {
        // Si la operación se completó con éxito, redirigimos al usuario a la página de login
        // o a la página que queramos
        console.log('Logout exitoso!');
      })
      .catch((error) => {
        // Si se produjo un error, mostramos un mensaje de error al usuario
        console.error(error);
        alert('Hubo un error en el logout. Intente nuevamente.');
      });
  }

  signup() {
    this.authService.signup(this.email, this.password)
      .then(() => {
        // Si la operación se completó con éxito, redirigimos al usuario a la página principal
        // o a la página que queramos
        console.log('Signup exitoso!');
      })
      .catch((error) => {
        // Si se produjo un error, mostramos un mensaje de error al usuario
        console.error(error);
        alert('Hubo un error en la creación de usuario. Intente nuevamente.');
      });
  }

  getCurrentUser() {
    return this.authService.getCurrentUser();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  showMsg(msg:string){
    // this.notification.Success(msg);
  }
}
