import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Ventas } from 'src/app/games/juegos';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.scss']
})
export class DetalleVentaComponent {

  @Input() ventas: Ventas | null = null;
  @Output() close = new EventEmitter<void>();

  onCloseModal() {
    console.log("cerrar modal")
    this.close.emit();
  }

  
}
