import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { SchoolsComponent } from './schools.component';
import { SchoolsService } from './schools.service';
import { ProfilService } from './srvices/profil.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumePipe } from './resume.pipe';
import { PanelComponent } from './panel/panel.component';
import { ProfileComponent } from './profile/profile.component';
import { SigupFormComponent } from './sigup-form/sigup-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent,
    SchoolComponent,
    ResumePipe,
    PanelComponent,
    ProfileComponent,
    SigupFormComponent,
    PostsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [SchoolsService,ProfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
