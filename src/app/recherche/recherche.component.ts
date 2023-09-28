import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  categorie:string="";
  etat:string=""
  min:number=0
  max:number=0
  image:string='assets/images/meuble-table.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
