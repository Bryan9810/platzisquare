import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'Platzi Square';

  lat: number = 4.6972091;
  lng: number = -74.0367337;

  lugares = null;

  constructor(private lugaresService: LugaresService){
    lugaresService.getLugares()
    .valueChanges().subscribe(lugares => {
      this.lugares = lugares;
    });
  }
}
