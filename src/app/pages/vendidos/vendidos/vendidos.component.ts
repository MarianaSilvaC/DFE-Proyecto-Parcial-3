import { Component, OnInit} from '@angular/core';

import { Producto, Ventas } from 'src/app/games/juegos';

import { VentaService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-vendidos',
  templateUrl: './vendidos.component.html',
  styleUrls: ['./vendidos.component.scss']
})
export class VendidosComponent implements OnInit {

  cargandoVentas = false;

  listadoVentas: Ventas[] = [];

  constructor(private ventaService: VentaService) { }
 
  ngOnInit() {
    this.cargarVentas();
  }

  cargarVentas() {
    this.cargandoVentas = true;
    this.ventaService.getVentasLista().subscribe(
      (ventas: Ventas[]) => {
        this.listadoVentas = ventas;
        this.cargandoVentas = false;
      },
      error => {
        console.error('Error al cargar las ventas', error);
        this.cargandoVentas = false;
      }
    );
  }

  get mensaje(): string {
    if (this.cargandoVentas) {
      return 'Cargando...';
    } else {

      return this.listadoVentas.length > 0 ?
        `${this.listadoVentas.length} registros encontrados.` :
        'No se han encontrado registros...';

    }

  }
  
}
