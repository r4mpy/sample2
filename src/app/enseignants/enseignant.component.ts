import { Component ,OnInit } from '@angular/core';

import { EnseignantService } from '../EnseignantServices';
import { Enseignants } from './Enseignants';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent {
  id='number';
  nom='string';
  matiere='string';
  classe='string';

  enseignants:Enseignants[]=[]
  private route!: ActivatedRoute;

  
  constructor(private EnseignantService:EnseignantService){}
  ngOnInit(): void {
    this.getEnseignants();
    
  }

  getEnseignants(): void {
  
      this.EnseignantService['getEnseignant']()
        .subscribe((enseignants: Enseignants[]) => this.enseignants = enseignants.slice(1, 5));
    }
    }


