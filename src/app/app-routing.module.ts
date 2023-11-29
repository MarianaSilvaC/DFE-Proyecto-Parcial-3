import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './pages/ventas/ventas/ventas.component';
import { InicioComponent } from './pages/dashboard/inicio/inicio.component';
import { VendidosComponent } from './pages/vendidos/vendidos/vendidos.component';

const routes: Routes = [
  {path: 'catalogo', component: VentasComponent},
  {path: '', component: InicioComponent},
  {path: 'ventas', component: VendidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
