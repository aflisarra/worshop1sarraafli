import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importation du FormsModule
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Ajout de FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
