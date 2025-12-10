import { inject, Injectable } from '@angular/core';
import { Iserie } from '../interfaces/iserie.interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class SerieService {

    private baseUrl: string = 'https://peticiones.online/api/series';
    httpClient = inject(HttpClient);

    constructor() { }



    getAllSeries(): Observable<Iserie[]> {
        return this.httpClient.get<Iserie[]>(this.baseUrl);
    }

    getAllSeriesWithPromise(): Promise<Iserie[]> {
        return lastValueFrom(this.httpClient.get<Iserie[]>(this.baseUrl))
    }

    getSerieById(_id: string): Promise<Iserie> {
        return lastValueFrom(this.httpClient.get<Iserie>(this.baseUrl + '/' + _id)); //`${this.baseUrl}/${_id}`

    }

    //Metodo para eliminar series
    deleteByTitle(title: string): void {

    }

    deleteById(_id: string): Promise<Iserie> {
        return lastValueFrom(this.httpClient.delete<Iserie>(`${this.baseUrl}/${_id}`));
    }

    //Metodo para insertar serie
    insertSerie(serie: Iserie): Promise<Iserie> {
        return lastValueFrom(this.httpClient.post<Iserie>(this.baseUrl, serie));

    }

    updateSerie(serie: Iserie): Promise<Iserie> {
        return lastValueFrom(this.httpClient.put<Iserie>(`${this.baseUrl}/${serie._id}`, serie));

    }

    //Filtros

    getSeriesByFilters(filtro: any) {

    }

}
