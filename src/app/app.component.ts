import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzi Square';

  lugares:any = [
    {active: true, nombre:'Panaderia Bendito el pan'},
    {active: true, nombre:'Restaurante la terraza del gordo'},
    {active: true, nombre:'Armando Chicharron'},
    {active: false, nombre:'Bendito el pan'},
    {active: true, nombre:'la terraza del gordo'},
    {active: true, nombre:'Armando Chicharron'}
  ];

  personas:any = [
      {nombre:'Juan Perez',edad: 18},
      {nombre:'Carlos Gonzalez',edad: 23},
      {nombre:'Marcos Lugo',edad: 38},
      {nombre:'Alvaro Gomez',edad: 13},
      {nombre:'Maria Lopez',edad: 18}
    ]

  lat: number = 4.6972091;
  lng: number = -74.0367337;

  constructor(){

  }

}
