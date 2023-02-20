import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { SchoolsComponent } from './schools.component';
import { SchoolsService } from './srvices/schools.service';
import { ProfilService } from './srvices/profil.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumePipe } from './resume.pipe';
import { PanelComponent } from './panel/panel.component';
import { ProfileComponent } from './profile/profile.component';
import { SigupFormComponent } from './sigup-form/sigup-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './srvices/post.service';

import { FoollowersComponent } from './foollowers/foollowers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FllowerService } from './srvices/fllower.service';
import { BaseAngularAndTypescripteComponent } from './base-angular-and-typescripte/base-angular-and-typescripte.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent,
    SchoolComponent,
    ResumePipe,
    PanelComponent,
    ProfileComponent,
    SigupFormComponent,
    PostsComponent,
    FoollowersComponent,
    HomeComponent,
    PageNotFoundComponent,
    HomeComponent,
    BaseAngularAndTypescripteComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule 
    
  ],
  providers: [SchoolsService,ProfilService ,PostService ,FllowerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
