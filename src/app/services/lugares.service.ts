import {Injectable} from "@angular/core";
import { AngularFireDatabase } from'angularfire2/database';

@Injectable()

export class LugaresService {
  lugares:any = [
    {id:1, plan:'pagado', cercania: 1, distancia: 1, active: true, nombre:'Panaderia Bendito el pan'},
    {id:2, plan:'gratuito', cercania: 1, distancia: 10.8, active: true, nombre:'Restaurante la terraza del gordo'},
    {id:3, plan:'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Armando Chicharron'},
    {id:4, plan:'gratuito', cercania: 3, distancia: 10, active: true, nombre:'Bendito el pan'},
    {id:5, plan:'pagado', cercania: 3, distancia: 35, active: true, nombre:'la terraza del gordo'},
    {id:6, plan:'gratuito', cercania: 3, distancia: 120, active: true, nombre:'Armando Chicharron'}
  ]

  constructor(private afDB: AngularFireDatabase){  }

  public getLugares(){
    return this.afDB.list('lugares/');
  }
  public buscarLugar(id){
    return this.lugares.filter((lugar) => { return lugar.id == id }) [0] || null;
  }
  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/'+ lugar.id).set(lugar);
  }
}
