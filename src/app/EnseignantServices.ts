import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Enseignants } from './enseignants/Enseignants'


@Injectable({
  providedIn: 'root'
})

export class EnseignantService {
  [x: string]: any;
  enseignants$!: Observable<Enseignants[]>;
  private enseignantsUrl = 'api/enseignants';
  

  constructor(private http: HttpClient) { }

 
  getEnseignants(id: number): Observable<Enseignants> {
    const url = `${this.enseignantsUrl}/${id}`;
    return this.http.get<Enseignants>(url).pipe(
      tap((_: any) => this['log'](`fetched hero id=${id}`)),
      catchError(this['handleError'])
      )}
      private handleError(error: any): Observable<never> {
  // Gérer l'erreur ici, par exemple afficher un message d'erreur ou effectuer des actions supplémentaires
  console.error('Une erreur s\'est produite :', error);
  // Renvoyer une Observable avec un message d'erreur générique ou une action spécifique
  return throwError('Une erreur s\'est produite. Veuillez réessayer ultérieurement.');
      }private log(message: string): void {
    console.log(message);
    }
    
        
  
}






