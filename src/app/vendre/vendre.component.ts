import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.scss']
})
export class VendreComponent implements OnInit {
  titre:String="";
  categorie:String="";
  etat:String="";
  description:String="";
  prix:Number=0.0;
  stage_categorie:boolean=false;
  stage_description:boolean=false;
  stage_prix:boolean=false
  flag_prev:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  continuer():void{
    if(!this.flag_prev)
      this.flag_prev=true
    if(!this.stage_categorie){
      this.stage_categorie=true
      return
    }

    if(!this.stage_description)
    {
      this.stage_description=true
      return
    }
      
    if(!this.stage_prix)
    {
      this.stage_prix=true
      return
    }
      
  }

}
