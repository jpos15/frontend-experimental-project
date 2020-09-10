import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';


const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [] },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'project'
  },
  { path: 'project', component: ProjectComponent, canActivate: [] },
  { path: 'project/add', component: CreateProjectComponent, canActivate: [] },
  { path: 'project/edit/:id', component: CreateProjectComponent, canActivate: [] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
