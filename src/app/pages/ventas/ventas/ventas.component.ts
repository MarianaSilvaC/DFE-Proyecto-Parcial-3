import { Component, OnInit } from '@angular/core';

import { Videojuego } from 'src/app/games/juegos';

import { JuegoService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  cargandoJuegos = false;

  listadoJuegos: Videojuego[] = [];

  constructor(private data: JuegoService){

  }

  ngOnInit() {
    this.getJuegoslista();
  }

  get mensaje(): string {
    if (this.cargandoJuegos) {
      return 'Cargando...';
    } else {

      return this.listadoJuegos.length > 0 ?
        `${this.listadoJuegos.length} registros encontrados.` :
        'No se han encontrado registros...';

    }

  }

  private getJuegoslista() {
    this.cargandoJuegos = true;

    this.data.getJuegoslista()
    .subscribe(x => {
      this.cargandoJuegos = false;
      this.listadoJuegos = x;
    });
}

}

    

