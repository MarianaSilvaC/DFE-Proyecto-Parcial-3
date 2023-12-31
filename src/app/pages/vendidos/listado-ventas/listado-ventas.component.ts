import { Component, Input } from '@angular/core';
import { Producto, Ventas } from 'src/app/games/juegos';

import { UtilidadesService } from 'src/app/services/utilidades.service';


@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrls: ['./listado-ventas.component.scss']
})
export class ListadoVentasComponent {
  
  @Input() listadoVentas: Ventas[] = [];
  
  @Input() cargandoVentas = false;

  ventaSeleccionada: Ventas | null = null;

  constructor(private utilidadesService: UtilidadesService) { }

  obtenerTitulosProductos(productos: Producto[]): string {
    return this.utilidadesService.obtenerTitulosProductos(productos);
  }

  cerrarModal(): void {
    this.ventaSeleccionada = null;
  }

  seleccionarVenta(venta: Ventas) {
    this.ventaSeleccionada = venta;
  }
  
  

}