import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  imagesImmobilier: string[] = [
    'assets/images/cabane.jpg',
    'assets/images/maison-bleu.jpg',
    'assets/images/maison-jaune.jpg'
  ];
  imagesAmeublement: string[] = [
    'assets/images/chaise.jpg',
    'assets/images/chambre.jpg',
    'assets/images/meuble-table.jpg'
  ];
  imagesVehicule: string[] = [
    'assets/images/voiture-rouge.jpg',
    'assets/images/voiture-noire.jpg',
    'assets/images/voiture-interieur.jpg'
  ];
  currentImageImmo:string ='assets/images/cabane.jpg';
  currentImageVehicule:string ='assets/images/voiture-interieur.jpg';
  currentImageAmeublement:string ='assets/images/meuble-table.jpg';
  constructor() { }

  ngOnInit(): void {
    
  }
  changeImageByTime(time: number,images: string[]):number {
    return time % images.length;
  }
    intervalId: any = setInterval(() => {
    const now = new Date();
    const currentHour = now.getSeconds();
    this.currentImageImmo = this.imagesImmobilier[this.changeImageByTime(currentHour,this.imagesImmobilier)];
    this.currentImageVehicule=this.imagesVehicule[this.changeImageByTime(currentHour,this.imagesVehicule)];
    this.currentImageAmeublement=this.imagesAmeublement[this.changeImageByTime(currentHour,this.imagesAmeublement)];
  }, 7000);
}
