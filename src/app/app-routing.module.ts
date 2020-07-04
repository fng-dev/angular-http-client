import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitComponent } from '../app/git/git.component';
import { UserComponent } from '../app/user/user.component'


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: GitComponent },
    { path: 'user/:id', component: UserComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
