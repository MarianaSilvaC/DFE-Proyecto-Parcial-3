import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendidosComponent } from './vendidos/vendidos.component';
import { ListadoVentasComponent } from './listado-ventas/listado-ventas.component';
import { FiltroVentasComponent } from './filtro-ventas/filtro-ventas.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';



@NgModule({
  declarations: [
    VendidosComponent,
    ListadoVentasComponent,
    FiltroVentasComponent,
    DetalleVentaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VendidosModule { }
