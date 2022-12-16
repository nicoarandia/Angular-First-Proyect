import { Component,Input,Output,EventEmitter,OnInit,OnDestroy,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit,OnDestroy,OnChanges {


  @Input() nombre: string ="Anonimo";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  myStyle:object={
    color:'blue',
    fontsize:'20px',
    fontweight:'bold'
  }

  constructor() { }

  ngOnInit(): void {
    //Intrucciones previa a la renderizacion del componente

    console.log("ngOnInit del componente Saludo")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("CAMBIO: Valor antrerior",changes['nombre'].previousValue)
    console.log("CAMBIO: El valor nuevo",changes['nombre'].currentValue)
  }
  ngOnDestroy(): void {
    console.log("ngDestroy del componente Saludo");
  }
  /**
   * Ejemplo para gestionar un evento CLICK en el DOM y enviar un texto al componente padre
   */

  enviarMensajeAlPadre():void{
    //alert(`Hola ${this.nombre}. Alerta despachada desde un click de boton`)
    this.mensajeEmitter.emit(`Hola ${this.nombre}. Alerta despachada desde un click de boton`);
  }
}

// Orden de ciclo de vida de los componentes:
//* 1 ngOnChange
//* 2 ngOnInit
//* 3 ngAfterContentInit
//* 4 ngAfterContentCheked
//* 5 ngAfterViewInit
//* 6 ngAfterViewChequecked
//* 7 ngAfterContentCheked
//* 8 ngAfterViewChequecked
//* 9 ngOnDestroy
