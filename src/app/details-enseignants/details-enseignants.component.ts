import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../EnseignantServices';
import { Enseignants } from '../enseignants/Enseignants';


@Component({
  selector: 'app-details-enseignants',
  templateUrl: './details-enseignants.component.html',
  styleUrls: ['./details-enseignants.component.less']
})
export class DetailsEnseignantsComponent {
  
  enseignants:Enseignants[]=[]
  constructor(private EnseignentService:EnseignantService){}
  ngOnInit(): void{
    this.getEnseignants();
  }

  getEnseignants(): void {
    this.EnseignentService['getEnseignant']()
    .subscribe((enseignants: Enseignants[]) => this.enseignants = enseignants);
  }
  add(nom:string): void {
    nom = nom.trim();
    if (!nom) { return; }
    this.EnseignentService['addEnseigants']({ nom} as Enseignants)
      .subscribe((enseignants: Enseignants) => {
        this.enseignants.push(enseignants);
      })
  }
}




