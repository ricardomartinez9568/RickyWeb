import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAboutMeComponent } from './admin-about-me/admin-about-me.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AuthGuard } from './_services/AuthGuard/auth.guard';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'blog/:id',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin/login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'admin/about',
    component: AdminAboutMeComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'admin/blog/:id',
    component: AdminBlogComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'admin/contact',
    component: AdminContactComponent,
    canActivate : [AuthGuard]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
