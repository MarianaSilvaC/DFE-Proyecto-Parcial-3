import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasModule } from './pages/ventas/ventas.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { VendidosModule } from './pages/vendidos/vendidos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    VentasModule,
    DashboardModule,
    VendidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
