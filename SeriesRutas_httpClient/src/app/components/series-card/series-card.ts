import { Component, inject, Input } from '@angular/core';
import { Iserie } from '../../interfaces/iserie.interface';
import { SerieService } from '../../services/serie-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-series-card',
    imports: [],
    templateUrl: './series-card.html',
    styleUrl: './series-card.css',
})
export class SeriesCard {

    seriesService = inject(SerieService);
    router = inject(Router);
    @Input() miSerie!: Iserie;


    async deleteSerie(serie: Iserie) {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })

        const response = await this.seriesService.deleteById(serie._id);

        if (response._id) {
            alert("Se ha eliminado correctamente la serie: " + serie.title);
        } else {
            alert("NO se ha eliminado correctamente la serie: " + serie.title);
        }
    }

    seeDetails(serie: Iserie) {
        this.router.navigate(['/serie', serie._id]);

    }


}
