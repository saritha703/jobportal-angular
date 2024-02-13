import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { JobPostComponent } from './job-post/job-post.component';
import { PostedJobsListComponent } from './posted-jobs-list/posted-jobs-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SignupComponent,
    RegistrationComponent,
    LoginComponent,
    JobsListComponent,
    JobsDetailsComponent,
    ProfileComponent,
    JobPostComponent,
    PostedJobsListComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
