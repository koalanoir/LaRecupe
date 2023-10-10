import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = false;
  photo:string=""
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { 
  }

  ngOnInit(): void {
    this.auth.user$.pipe(
      // Utilisez l'opérateur 'map' pour extraire l'URL de la photo de profil de l'objet User.
      map((user) => user?.picture || "")
    ).subscribe((photoUrl) => {
      // Maintenant, 'photoUrl' contient l'URL de la photo de profil.
      this.photo = photoUrl;
    });
  }
  
  openMenuFunction(): void {
    if (this.openMenu!=true) {
      this.openMenu = true;
    }else{
      this.openMenu = false;
    }
    
  }

}
