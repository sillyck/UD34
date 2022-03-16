import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero1:number = 0.0;
  numero2:number = 0.0;
  pantalla: string = "0.0";
  resultado:number = 0;
  num1S = "";
  num2S = "";

  escribir(tecla:string) {
    if (this.pantalla != "0.0"){
      this.pantalla = this.pantalla+tecla
    }else{
      this.pantalla = tecla;
    }
  }

  borrar(){
    this.pantalla = "0.0";
  }

  calcular(){
    for (let i = 0; i < this.pantalla.length; i++){
      if(this.pantalla.charCodeAt(i) == 43 || this.pantalla.charCodeAt(i) == 47 || this.pantalla.charCodeAt(i) == 42 || this.pantalla.charCodeAt(i) == 45){
        for (let j = 0; j < i; j++){
          this.num1S = this.num1S + String.fromCharCode(this.pantalla.charCodeAt(j));
        }
        this.numero1 = +this.num1S;
        for (let y = i; y < this.pantalla.length; y++){
          this.num2S = this.num2S + String.fromCharCode(this.pantalla.charCodeAt(y));
          this.numero2 = +this.num2S;
        }

        switch (this.pantalla.charCodeAt(i)){
          case 43:
            this.resultado = this.numero1 + this.numero2;
            break;
          case 47:
            this.resultado = this.numero1 / this.numero2;
            break;
          case 42:
            this.resultado = this.numero1 * this.numero2;
            break;
          case 45:
            this.resultado = this.numero1 - this.numero2;
            break;
        }
      }
    }
  }
}
