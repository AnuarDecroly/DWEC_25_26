import { Injectable } from '@angular/core';
import { Iserie } from '../interfaces/iserie.interface';

@Injectable({
    providedIn: 'root',
})
export class SerieService {
    private arrSeries: Iserie[];

    constructor() {
        this.arrSeries = [];

        fetch("https://peticiones.online/api/series")
            .then(response => response.json())
            .then(datos => {
                datos.forEach((element: any) => {
                    let serie = element as Iserie;
                    this.arrSeries.push(serie);
                });
            });
    }

    getAllSeries(): Iserie[] {
        return this.arrSeries;
    }

    //Metodo para eliminar series

    //Metodo para insertar serie

    //Filtros

}
