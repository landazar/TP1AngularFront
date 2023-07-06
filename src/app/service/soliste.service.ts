import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Soliste } from '../model/soliste.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolisteService {

  constructor(private http:HttpClient) { }

  ajoutSoliste(soliste:Soliste):Observable<Soliste>
  {
    return this.http.post<Soliste>("http://localhost:8080/saveSoliste", soliste);
  }

  supprimerSoliste(num:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deleteSoliste/" + num);
  }

  listeSoliste():Observable<Soliste[]>
  {
    return this.http.get<Soliste[]>("http://localhost:8080/listeSoliste");
  }

  getSolisteById(id:number):Observable<Soliste>
  {
    return this.http.get<Soliste>("http://localhost:8080/getSoliste/" + id);
  }

  updateSoliste(soliste:Soliste):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierSoliste", soliste);
  }
}
