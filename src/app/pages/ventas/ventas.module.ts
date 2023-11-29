import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasComponent } from './ventas/ventas.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FiltroJuegosComponent } from './filtro-juegos/filtro-juegos.component';
import { DetalleJuegoComponent } from './detalle-juego/detalle-juego.component';



@NgModule({
  declarations: [
    VentasComponent,
    CatalogoComponent,
    FiltroJuegosComponent,
    DetalleJuegoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
