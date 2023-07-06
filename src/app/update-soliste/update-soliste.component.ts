import { Component, OnInit } from '@angular/core';
import { SolisteService } from '../service/soliste.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-soliste',
  templateUrl: './update-soliste.component.html',
  styleUrls: ['./update-soliste.component.css']
})
export class UpdateSolisteComponent implements OnInit{

  solisteForm?:FormGroup;
  id!:number;

  constructor(private ss:SolisteService, private formBuilder:FormBuilder, private ar:ActivatedRoute, private route:Router) {
    this.id = ar.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.ss.getSolisteById(this.id).subscribe(data => {
      this.solisteForm = this.formBuilder.group(
        {
          num:[data.num],
          nom:[data.nom],
          prenom:[data.prenom],
          dateNaissance:[data.dateNaissance],
          nationalite:[data.nationalite]
        })
      });
  }

  updateSoliste()
  {
    this.ss.updateSoliste(this.solisteForm?.value).subscribe();
    this.route.navigateByUrl("soliste");
  }


}
