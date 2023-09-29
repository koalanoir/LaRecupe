import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import{MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { FooterComponent } from './footer/footer.component';
import { VendreComponent } from './vendre/vendre.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RechercheComponent } from './recherche/recherche.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuMobileComponent,
    FooterComponent,
    VendreComponent,
    MessagerieComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    InfiniteScrollModule,
    MatCardModule,
    FormsModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-cjxhb-x9.eu.auth0.com',
      clientId: 'KOjEvPTWuI6TuZIQCuRCwTfxWYNwwWLw',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
