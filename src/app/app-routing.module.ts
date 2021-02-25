import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/home/home.component';
import { AfficheFilmComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/affiche-film/affiche-film.component';
import { AfficheSerieComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/affiche-serie/affiche-serie.component';
import { DetailFilmComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/detail-film/detail-film.component';
import { DetailSerieComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/detail-serie/detail-serie.component';
import { SearchComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/search/search.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'films', component:AfficheFilmComponent},
  {path:'series', component:AfficheSerieComponent},
  {path:'detailfilm/:id', component:DetailFilmComponent},
  {path:'detailserie/:id', component:DetailSerieComponent},
  {path:'search/:find', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }