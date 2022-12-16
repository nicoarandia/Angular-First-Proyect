import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = '@Nicolas';

  /*Esta funcion se ejecutara cuando en el Hijo (Saludo Component) se pulse un boton */

  recibirMensajeDelHijo(evento:String){
    alert(evento)
  }

}
