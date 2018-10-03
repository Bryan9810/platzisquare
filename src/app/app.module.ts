import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';
import {ContarClicksDirective} from './directives/contar-clicks.directives';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes,RouterModule} from "@angular/router";
import {DetalleComponent} from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CrearComponent } from './crear/crear.component';

const appRoutes: Routes = [
    {path:'',component: LugaresComponent},
    {path:'lugares',component: LugaresComponent},
    {path:'detalle/:id',component: DetalleComponent},
    {path:'contacto',component: ContactoComponent},
    {path:'crear',component: CrearComponent},
];

export const firebaseConfig = {

  apiKey: "AIzaSyD1Z0xctxCV2TFj2UU_GcGxlMlH7VjmSg0",
  authDomain: "platzisquare-857f7.firebaseapp.com",
  databaseURL: "https://platzisquare-857f7.firebaseio.com",
  storageBucket: "platzisquare-857f7.appspot.com",
  messagingSenderId: "350770940322"
};

@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
        ContarClicksDirective,
          DetalleComponent,
            LugaresComponent,
              ContactoComponent,
                CrearComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVQZK8skXBfmYz135t5ye2tZhMrbymyA4'
    }),

    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule
  ],

  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
