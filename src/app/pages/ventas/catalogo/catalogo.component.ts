import { Component, Input } from '@angular/core';

import { Videojuego } from 'src/app/games/juegos';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  @Input() listadoJuegos: Videojuego[] = [];

  @Input() cargandoJuegos = false;

  juegoSeleccionado: Videojuego | null = null;

  seleccionarJuego(juego: Videojuego): void {
    this.juegoSeleccionado = juego;
  }

  cerrarModal(): void {
    this.juegoSeleccionado = null;
  }


}
