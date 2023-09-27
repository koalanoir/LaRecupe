import { Component, OnInit } from '@angular/core';
import { CacheService } from '../service/cache.service';
@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.scss']
})
export class VendreComponent implements OnInit {
  titre=this.cacheService.getItem('titre');
  categorie=this.cacheService.getItem('categorie');
  etat=this.cacheService.getItem('etat');
  description=this.cacheService.getItem('description');
  prix=this.cacheService.getItem('prix');
  stage_categorie:boolean=false;
  stage_description:boolean=false;
  stage_titre:boolean=true;
  stage_prix:boolean=false
  flag_prev:boolean=false
  constructor(private cacheService: CacheService) { 

  }

  ngOnInit(): void {
  }

  retour():void{
    if(this.stage_categorie){
      this.stage_titre=true
      this.stage_categorie=false
      return
    }

    if(this.stage_description)
    {
      this.stage_categorie=true
      this.stage_description=false
      return
    }
      
    if(this.stage_prix)
    {
      this.stage_description=true
      this.stage_prix=false
      return
    }
      
  }

  continuer():void{
    if(!this.flag_prev)
      this.flag_prev=true
    if(this.stage_titre){
      this.cacheService.setItem('titre', this.titre);
      this.stage_titre=false
      this.stage_categorie=true
      return
    }

    if(this.stage_categorie)
    {
      this.cacheService.setItem('categorie', this.categorie);
      this.cacheService.setItem('categorie', this.etat);
      this.stage_categorie=false
      this.stage_description=true
      return
    }
      
    if(this.stage_description)
    {
      this.cacheService.setItem('description', this.description);
      this.stage_description=false
      this.stage_prix=true
      return
    }
    if(this.stage_prix)
    {
      this.cacheService.setItem('prix', this.prix);
      this.stage_prix=false
      return
    }
      
  }

}
