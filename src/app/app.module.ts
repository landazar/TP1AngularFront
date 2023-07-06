import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterOeuvreComponent } from './ajouter-oeuvre/ajouter-oeuvre.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterOeuvreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
