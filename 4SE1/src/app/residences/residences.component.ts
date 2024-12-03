import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpg", status: "En Construction"}
    ];

    // Liste des résidences favorites
  favorites: Residence[] = [];
  searchQuery: string = ''; // Assurez-vous que searchQuery est une chaîne

   v=false; 
   nameR!:String;
   ShowLocation(residence:Residence){
    if(residence.address==="inconnu"){
      alert('adress inconnu')
    }else{
      this.v=true;
      this.nameR=residence.address;
    }
   }
   
   // Méthode pour ajouter une résidence à la liste des favoris
  addFavorite(residence: Residence) {
    // Vérifier si la résidence n'est pas déjà dans la liste des favoris
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
    }
  }
  
  // Getter pour filtrer les résidences selon la recherche
  get filteredResidences() {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
