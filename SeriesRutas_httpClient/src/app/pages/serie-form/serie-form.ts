import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iserie } from '../../interfaces/iserie.interface';
import { SerieService } from '../../services/serie-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-serie-form',
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './serie-form.html',
    styleUrl: './serie-form.css',
})
export class SerieForm {

    serieForm: FormGroup;
    serieService = inject(SerieService);
    activatedRoute = inject(ActivatedRoute);
    router = inject(Router);

    isNew: boolean;

    constructor() {
        this.isNew = true;
        this.serieForm = new FormGroup({
            _id: new FormControl(null, []),
            id: new FormControl(null, []),
            title: new FormControl(null, [Validators.required]),
            creator: new FormControl(null, [Validators.required]),
            rating: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
            dates: new FormControl(null, [Validators.required]),
            image: new FormControl(null, [Validators.required]),
            channel: new FormControl(null, [Validators.required]),
        }, []);

    }

    async getDataForm() {
        let serie = this.serieForm.value as Iserie;
        if (this.isNew) {

            const response = await this.serieService.insertSerie(serie);
            if (response.id) {
                alert(`La serie ${response.title} se ha insertado correctamente`)
            }
        }
        else {

            //llamar a update en el servicio
            const response = await this.serieService.updateSerie(serie);
            if (response.id) {
                alert(`La serie ${response.title} se ha actualizado correctamente`)
            }
            console.log(serie);
        }

        this.serieForm.reset();
        this.router.navigate(['series'])

    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(async (params: any) => {
            let _id: string = params._id;
            if (_id != undefined) {
                //Pedir al servicio la serie por _id
                let miSerie = await this.serieService.getSerieById(_id);
                if (miSerie != undefined) {
                    this.isNew = false;
                    this.serieForm = new FormGroup({
                        _id: new FormControl(miSerie._id, []),
                        id: new FormControl(miSerie.id, []),
                        title: new FormControl(miSerie.title, [Validators.required]),
                        creator: new FormControl(miSerie.creator, [Validators.required]),
                        rating: new FormControl(miSerie.rating, [Validators.required, Validators.min(0), Validators.max(10)]),
                        dates: new FormControl(miSerie.dates, [Validators.required]),
                        image: new FormControl(miSerie.image, [Validators.required]),
                        channel: new FormControl(miSerie.channel, [Validators.required]),
                    }, []);
                } else {
                    alert("No se encuantra la serie en nuestro servicio");
                }
            }
        });
    }


}
