import { Component, inject } from '@angular/core';
import { Iserie } from '../../interfaces/iserie.interface';
import { SerieService } from '../../services/serie-service';
import { SeriesCard } from '../../components/series-card/series-card';


@Component({
    selector: 'app-series-list',
    imports: [SeriesCard],
    templateUrl: './series-list.html',
    styleUrl: './series-list.css',
})
export class SeriesList {

    seriesArray: Iserie[];
    seriesService = inject(SerieService);

    constructor() {
        this.seriesArray = [];
    }

    async ngOnInit(): Promise<void> {
        // this.seriesService.getAllSeries().subscribe((data: Iserie[]) => {
        //     this.seriesArray = data;
        // }
        // );
        try {
            this.seriesArray = await this.seriesService.getAllSeriesWithPromise();
        }
        catch (err) {
            console.log("Error al conectar a la API");
            alert("Error al conectar a la API")
        }


    }


    inputFilter($event: any) {
        //this.seriesArray = this.seriesService.getSeriesByFilters($event);
    }


}
