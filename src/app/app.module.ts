import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChefOrchestreComponent } from './chefOrchestre/chef-orchestre/chef-orchestre.component';

@NgModule({
  declarations: [
    AppComponent,
    ChefOrchestreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
