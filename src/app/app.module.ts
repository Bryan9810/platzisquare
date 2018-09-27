import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directives';

@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
        ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVQZK8skXBfmYz135t5ye2tZhMrbymyA4'
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
