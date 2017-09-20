import { BrowserModule } 			from '@angular/platform-browser';
import { NgModule } 				from '@angular/core';

import { AppComponent } 			from './app.component';
import { AppRoutingModule }			from './app-routing.module';
import { LandingPageComponent } 	from './landing-page/landing-page.component';
import { MortyComponent } from './morty/morty.component';

@NgModule({
  imports: [
    BrowserModule,
	AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LandingPageComponent,
    MortyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
