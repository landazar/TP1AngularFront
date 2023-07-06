import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChefOrchestre } from '../model/chef-orchestre.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChefOrchestreService {

  constructor(private http:HttpClient) { }

  
  findAllChefOrchestre():Observable<ChefOrchestre[]>
  {
    return this.http.get<ChefOrchestre[]>("http://localhost:8080/listeChefOrchestre");
  }
}
