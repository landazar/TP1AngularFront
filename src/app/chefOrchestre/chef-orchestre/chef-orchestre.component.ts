import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChefOrchestre } from 'src/app/model/chef-orchestre.model';
import { ChefOrchestreService } from 'src/app/service/chef-orchestre.service';

@Component({
  selector: 'app-chef-orchestre',
  templateUrl: './chef-orchestre.component.html',
  styleUrls: ['./chef-orchestre.component.css']
})
export class ChefOrchestreComponent implements OnInit {

  constructor(private cos:ChefOrchestreService, private route:Router) {}

  listeChefOrchestre!:Observable<ChefOrchestre[]>;

  ngOnInit(): void {
    this.listeChefOrchestre = this.cos.findAllChefOrchestre();
  }

}
