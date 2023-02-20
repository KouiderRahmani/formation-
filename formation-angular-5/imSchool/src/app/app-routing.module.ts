import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAngularAndTypescripteComponent } from './base-angular-and-typescripte/base-angular-and-typescripte.component';
import { FoollowersComponent } from './foollowers/foollowers.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    { 
        path: "followers", 
        component: FoollowersComponent
     },
    { 
        path: "posts", 
        component: PostsComponent   
    },
    { 
        path: "followers/:id/:username",
        component: ProfileComponent
    },
    { 
        path: "school", 
        component: SchoolComponent
    },
    { 
      path: "baseAngularAndTypescripte", 
      component: BaseAngularAndTypescripteComponent
    },
    { 
        path: "**",
        component: PageNotFoundComponent
    }   
  ] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
 }
