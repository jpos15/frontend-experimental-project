import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { ProjectComponent } from './project/project.component';
import { ProjectCreateComponent } from './project/project-create/project-create.component';
import { ProjectViewComponent } from './project/project-view/project-view.component';


const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [] },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'project'
  },
  { path: 'project', component: ProjectComponent, canActivate: [] },
  { path: 'project/add', component: ProjectCreateComponent, canActivate: [] },
  { path: 'project/edit/:id', component: ProjectCreateComponent, canActivate: [] },
  { path: 'project/view/:id', component: ProjectViewComponent, canActivate: [] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
