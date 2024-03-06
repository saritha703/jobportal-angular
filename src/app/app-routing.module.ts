import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard} from './auth.guard';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path:"",component:ContentComponent},
  {path:"registration",component: RegistrationComponent},
  {path:"login",component: LoginComponent },
  {path:"jobs-list",canActivate: [AuthGuard],component: JobsListComponent},
  {path:"jobs-details/:id",canActivate: [AuthGuard],component:JobsDetailsComponent},
  {path:"profile", canActivate: [AuthGuard], component:ProfileComponent},
  {path:"job-post",canActivate: [AuthGuard],component:JobPostComponent},
  {path:"edit-job/:id",canActivate: [AuthGuard],component:JobPostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
