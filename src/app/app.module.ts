import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterOeuvreComponent } from './ajouter-oeuvre/ajouter-oeuvre.component';
import { ChefOrchestreComponent } from './chefOrchestre/chef-orchestre/chef-orchestre.component';
import { SolisteComponent } from './soliste/soliste.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireSolisteComponent } from './formulaire-soliste/formulaire-soliste.component';
import { UpdateSolisteComponent } from './update-soliste/update-soliste.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,

    AjouterOeuvreComponent,
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
