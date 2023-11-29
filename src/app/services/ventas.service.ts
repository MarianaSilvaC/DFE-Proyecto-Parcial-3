import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ventas } from '../games/juegos';

const API_PATH = 'https://6534761be1b6f4c59046be6a.mockapi.io/api/games/';

@Injectable({
    providedIn: 'root'
})
export class VentaService {

    constructor(private http: HttpClient) { }

    getVentasLista(): Observable<Ventas[]> {
        const path = API_PATH + 'ventas';
        return this.http.get<Ventas[]>(path);
    }
}
