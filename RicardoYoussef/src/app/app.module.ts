import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigatieBarComponent } from './navigatie-bar/navigatie-bar.component';
import { GalerijComponent } from './galerij/galerij.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigatieBarComponent,
    GalerijComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
