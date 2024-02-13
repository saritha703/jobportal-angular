import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
  
const routes: Routes = [
  {path:"",component:ContentComponent},
  {path:"registration",component: RegistrationComponent},
  {path:"login",component: LoginComponent },
  {path:"jobs-list",component: JobsListComponent},
  {path:"jobs-details",component:JobsDetailsComponent},
  {path:"profile", component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
