import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.scss']
})
export class VendreComponent implements OnInit {
  dateDuJour: string = "";
  titre:string='';
  categorie:string="";
  etat:string="";
  description:string="";
  prix:string="";
  imageUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  stage_image:boolean=false;
  stage_categorie:boolean=false;
  stage_description:boolean=false;
  stage_titre:boolean=true;
  stage_prix:boolean=false;
  stage_resume:boolean=false;
  flag_prev:boolean=false
  constructor() { 
    try{
      const cachedDataTitre = localStorage.getItem('titre'); // Utilisez "sessionStorage" pour SessionStorage
      if (cachedDataTitre) {
        this.titre = JSON.parse(cachedDataTitre);
      } else {
        this.titre = "" ; // Créez un objet vide si aucune donnée n'est en cache
      }
      const cachedDataCategorie = localStorage.getItem('categorie'); // Utilisez "sessionStorage" pour SessionStorage
      if (cachedDataCategorie) {
        this.categorie = JSON.parse(cachedDataCategorie);
      } else {
        this.categorie = "" ; // Créez un objet vide si aucune donnée n'est en cache
      }
      const cachedDataDescription = localStorage.getItem('description'); // Utilisez "sessionStorage" pour SessionStorage
      if (cachedDataDescription) {
        this.description = JSON.parse(cachedDataDescription);
      } else {
        this.description = "" ; // Créez un objet vide si aucune donnée n'est en cache
      }
      const cachedDataEtat = localStorage.getItem('etat'); // Utilisez "sessionStorage" pour SessionStorage
      if (cachedDataEtat) {
        this.etat = JSON.parse(cachedDataEtat);
      } else {
        this.etat = "" ; // Créez un objet vide si aucune donnée n'est en cache
      }
      const cachedDataprix = localStorage.getItem('prix'); // Utilisez "sessionStorage" pour SessionStorage
      if (cachedDataprix) {
        this.prix = JSON.parse(cachedDataprix);
      } else {
        this.prix = "" ; // Créez un objet vide si aucune donnée n'est en cache
      }
      
      const cachedDataselectedFile = localStorage.getItem('selectedFile'); // Utilisez "sessionStorage" pour SessionStorage
      if (cachedDataselectedFile) {
        this.selectedFile = JSON.parse(cachedDataselectedFile);
      } else {
        this.selectedFile = null ; // Créez un objet vide si aucune donnée n'est en cache
      }
      const cachedDataImageUrl = localStorage.getItem('image_url'); // Utilisez "sessionStorage" pour SessionStorage
      if (cachedDataImageUrl) {
        this.imageUrl = JSON.parse(cachedDataImageUrl);
      } else {
        this.imageUrl = "" ; // Créez un objet vide si aucune donnée n'est en cache
      }
    }catch(error){
      console.log(error)
    }
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
    if(this.stage_image)
    {
      this.stage_prix=true;
      this.stage_image=false;
      return
    }
    if(this.stage_resume)
    {
      this.stage_image=true;
      this.stage_resume=false;
      return
    }
  }


  onFileSelected(event: any): void {
    const file: File | null = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }





  continuer():void{
    if(!this.flag_prev)
      this.flag_prev=true
    if(this.stage_titre){
      localStorage.setItem('titre', JSON.stringify(this.titre));
      this.stage_titre=false
      this.stage_categorie=true
      return
    }

    if(this.stage_categorie)
    {
      localStorage.setItem('categorie', JSON.stringify(this.categorie));
      localStorage.setItem('etat', JSON.stringify(this.etat));
      this.stage_categorie=false
      this.stage_description=true
      return
    }
      
    if(this.stage_description)
    {
      localStorage.setItem('description', JSON.stringify(this.description));
      this.stage_description=false
      this.stage_prix=true
      return
    }
    if(this.stage_prix)
    {
      localStorage.setItem('prix', JSON.stringify(this.prix));
      this.stage_image=true
      this.stage_prix=false
      return
    }
    if(this.stage_image)
    {
      localStorage.setItem('image_url', JSON.stringify(this.imageUrl));
      localStorage.setItem('selectedFile', JSON.stringify(this.selectedFile));
      this.stage_resume=true;
      this.stage_image=false;
      const date=new Date();
      this.dateDuJour= date.getHours()+":"+date.getMinutes()+" "+date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();
      return
    }
      
  }

}
