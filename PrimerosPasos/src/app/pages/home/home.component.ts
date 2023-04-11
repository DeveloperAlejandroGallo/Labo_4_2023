import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { NotifierComponent } from 'src/app/notifier/notifier.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /**
   *
   */
  constructor(
    // private notification: NotifierComponent
    ) {

  }

  title: string = 'Primeros Pasos';
  variableInput: string = "";
  rutaImg: string = "";

  edadUno: number = 0;
  edadDos: number = 0;

  suma: number = 0;
  promedio: number = 0.0;

  Saludar(){
    this.variableInput = "Hola";
    this.rutaImg = "./assets/AGLogo.png";
  }


  Calcular() {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }

  Limpiar(){
    this.suma = 0;
    this.promedio = 0;
    this.edadUno = 0;
    this.edadDos = 0;
  }

  showMsg(msg:string){
    // this.notification.Success(msg);
  }
}
