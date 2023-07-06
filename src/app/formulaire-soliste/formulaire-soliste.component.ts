import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolisteService } from '../service/soliste.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-soliste',
  templateUrl: './formulaire-soliste.component.html',
  styleUrls: ['./formulaire-soliste.component.css']
})
export class FormulaireSolisteComponent implements OnInit{

  constructor(private formBuilder:FormBuilder, private ss:SolisteService, private route:Router) {}

  solisteForm!:FormGroup;

  ngOnInit(): void {
    this.solisteForm = this.formBuilder.group(
      {
        nom:[null],
        prenom:[null],
        datenaissance:[null],
        nationalite:[null]
      }
    )
  }

  saveSoliste()
  {
    this.ss.ajoutSoliste(this.solisteForm.value).subscribe();
    this.route.navigateByUrl("soliste");
  }
}
