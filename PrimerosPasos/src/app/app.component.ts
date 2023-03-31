import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
