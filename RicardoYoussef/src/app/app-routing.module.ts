import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigatieBarComponent } from './navigatie-bar/navigatie-bar.component';
import { GalerijComponent } from './galerij/galerij.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navigatie-bar', component: NavigatieBarComponent },
  { path: 'galerij', component: GalerijComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
