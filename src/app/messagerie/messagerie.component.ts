import { Component, OnInit } from '@angular/core';
import { MessagerieService } from '../service/messagerie.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss']
})
export class MessagerieComponent implements OnInit {
  conversations: any[] = [
    "chaise à vendre","chat volé","canard boiteux","ali baba","ayoub et julien en solde"
  ];
  offset = 0;
  limit = 10; // Nombre de conversations à charger à chaque fois
  annonce:string=""
  messagerieService!: MessagerieService
  nonClicked:boolean=true
  constructor() { }

  ngOnInit(): void {
  }
  viewEchange(conversation:string):void{
    this.annonce=conversation
    this.nonClicked=false
  }
  loadConversations() {
    try{
      this.messagerieService.getConversations(this.offset, this.limit).subscribe((data: any) => {
        // Traitez les données de la réponse de l'API.
        // Ajoutez-les à la liste des conversations actuelles.
        this.conversations.push(...data.conversations);
  
        // Incrémentez l'offset pour la prochaine requête.
        this.offset += this.limit;
      });
    }catch(error:any)
    {
      console.error('Une erreur s\'est produite lors de l\'execution de la methode loadConversations dans messagerie.component.ts:', error.message)
    }

  }
}
