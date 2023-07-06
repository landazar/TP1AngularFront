import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oeuvre } from './model/oeuvre';


@Injectable({
  providedIn: 'root'
})

export class OeuvreServiceService {

  constructor(private http:HttpClient) { }

  ajoutOeuvre(oeuvre: Oeuvre) {
    console.log(oeuvre);
    return this.http.post("http://localhost:8080/saveOeuvre", oeuvre);
  }

  obtenirOeuvre(idOeuvre: number) {
    return this.http.get<Oeuvre>("http://localhost:8080/getOeuvre/"+ idOeuvre);
  }

  modifierOeuvre(oeuvre: Oeuvre) {
    return this.http.put<boolean>("http://localhost:8080/modifierOeuvre", oeuvre);
  }

  supprimerOeuvre(idOeuvre: number) {
    return this.http.delete<boolean>("http://localhost:8080/deleteOeuvre/" + idOeuvre);
  }

  findAllOeuvres() {
    return this.http.get<Oeuvre[]>("http://localhost:8080/listeOeuvre");
  }
}
