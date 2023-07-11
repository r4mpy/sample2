import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EnseignantsComponent } from './enseignants/enseignant.component';
import { DetailsEnseignantsComponent } from './details-enseignants/details-enseignants.component';
const ROUTES: Routes = [{ path: 'Enseignants', component: EnseignantsComponent },
{ path: 'Details', component: DetailsEnseignantsComponent }];

@NgModule({
  declarations: [
    AppComponent
    ,
    DetailsEnseignantsComponent
    ,
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
