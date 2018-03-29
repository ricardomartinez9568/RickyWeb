import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth/auth.service';
import { CommentService } from './_services/comment/comment.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAboutMeComponent } from './admin-about-me/admin-about-me.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AuthGuard } from './_services/AuthGuard/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminAboutMeComponent,
    AdminBlogComponent,
    AdminContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CommentService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
