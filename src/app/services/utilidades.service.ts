// utilidades.service.ts
import { Injectable } from '@angular/core';
import { Producto } from '../games/juegos';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {
  obtenerTitulosProductos(productos: Producto[]): string {
    return productos.map(producto => producto.titulo).join(', ');
  }
}