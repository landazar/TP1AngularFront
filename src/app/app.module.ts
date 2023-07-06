import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterOeuvreComponent } from './ajouter-oeuvre/ajouter-oeuvre.component';
import { ChefOrchestreComponent } from './chefOrchestre/chef-orchestre/chef-orchestre.component';
import { SolisteComponent } from './soliste/soliste.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireSolisteComponent } from './formulaire-soliste/formulaire-soliste.component';
import { UpdateSolisteComponent } from './update-soliste/update-soliste.component';



@NgModule({
  declarations: [
    AppComponent,

    AjouterOeuvreComponent
    ChefOrchestreComponent,
    SolisteComponent,
    FormulaireSolisteComponent,
    UpdateSolisteComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
