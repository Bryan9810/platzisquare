import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzi Square';

  lugares:any = [
    {plan:'pagado', cercania: 1, distancia: 1, active: true, nombre:'Panaderia Bendito el pan'},
    {plan:'gratuito', cercania: 1, distancia: 10.8, active: true, nombre:'Restaurante la terraza del gordo'},
    {plan:'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Armando Chicharron'},
    {plan:'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Bendito el pan'},
    {plan:'pagado', cercania: 3, distancia: 35, active: true, nombre:'la terraza del gordo'},
    {plan:'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Armando Chicharron'}
  ]

  lat: number = 4.6972091;
  lng: number = -74.0367337;

  constructor(){

  }

}
