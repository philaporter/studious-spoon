import { BrowserModule } 			from '@angular/platform-browser';
import { NgModule } 				from '@angular/core';

import { AppComponent } 			from './app.component';
import { AppRoutingModule }			from './app-routing.module';
import { LandingPageComponent } 	from './landing-page/landing-page.component';

@NgModule({
  imports: [
    BrowserModule,
	AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
