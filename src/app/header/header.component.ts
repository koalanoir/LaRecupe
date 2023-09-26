import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = false;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  openMenuFunction(): void {
    if (this.openMenu!=true) {
      this.openMenu = true;
    }else{
      this.openMenu = false;
    }
    
  }

}