import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Videojuego } from '../games/juegos';

const API_PATH = 'https://6534761be1b6f4c59046be6a.mockapi.io/api/games/'

@Injectable({
    providedIn: 'root'
})
export class JuegoService {

    constructor(private http: HttpClient) { }


    getJuegoslista(): Observable<Videojuego[]> {
        const path = API_PATH + 'videojuegos';

        return this.http.get<Videojuego[]>(path);
    }
}