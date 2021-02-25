import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/app.component';
import { NavComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/nav/nav.component';
import { AfficheFilmComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/affiche-film/affiche-film.component';
import { AfficheSerieComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/affiche-serie/affiche-serie.component';
import { HomeComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/home/home.component';
import { DetailFilmComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/detail-film/detail-film.component';
import { DetailSerieComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/detail-serie/detail-serie.component';
import { SearchComponent } from 'c:/Users/LEWIS TANO/netflix-project/src/app/components/search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AfficheFilmComponent,
    AfficheSerieComponent,
    HomeComponent,
    DetailFilmComponent,
    DetailSerieComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }