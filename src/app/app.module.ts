import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu/side-menu.component';
import { PicturesComponent } from './pictures/pictures.component';
import { NamesComponent } from './names/names.component';
import { MusicComponent } from './music/music.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserServiceService } from './user-service/user-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    PicturesComponent,
    NamesComponent,
    MusicComponent,
    WelcomeComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'pictures', component: PicturesComponent},
      {path: 'names', component: NamesComponent},
      {path: 'music', component: MusicComponent},
      {path: 'user-details/:userName', component: UserDetailsComponent},
      {path: '', component: WelcomeComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
