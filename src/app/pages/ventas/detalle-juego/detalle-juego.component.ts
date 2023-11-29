import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Videojuego } from 'src/app/games/juegos';


@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.scss']
})
export class DetalleJuegoComponent {

  @Input() juego: Videojuego | null = null;
  @Output() close = new EventEmitter<void>();

  onCloseModal() {
    this.close.emit();
  }


}
