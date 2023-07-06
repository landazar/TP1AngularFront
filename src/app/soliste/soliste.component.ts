import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Soliste } from '../model/soliste.model';
import { SolisteService } from '../service/soliste.service';

@Component({
  selector: 'app-soliste',
  templateUrl: './soliste.component.html',
  styleUrls: ['./soliste.component.css']
})
export class SolisteComponent implements OnInit {

  constructor(private ss:SolisteService, private route:Router) {}

  listeSoliste!:Observable<Soliste[]>;

  ngOnInit(): void {
    this.listeSoliste = this.ss.listeSoliste();
  }

  supprimer(id:number)
  {
    this.ss.supprimerSoliste(id).subscribe();
    this.route.navigateByUrl("soliste");
  }
  

  getSolisteById(id:number)
  {
    this.route.navigateByUrl("updateSoliste/" + id);
  }

}
