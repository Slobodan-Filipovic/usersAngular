import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }      from './users/users.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
/* This is our AppRoutingModule.Routes array. Here we keep all the paths
to different parts of our app */
const routes: Routes = [
  { path: 'users', component: UsersComponent },
  /*So the user can navigate to the dashboard, the route (the above one)
   needs a path to it*/
  { path: 'dashboard', component: DashboardComponent },
  /*This is our default route, so when the app starts users see something 
  This line bellow navigates to the dashboard automatically*/
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  /*The (:) in the path indicates that :id is a placeholder for a specific hero id */
  { path: 'detail/:id', component: UserDetailComponent },
];

@NgModule({
  /*The method is called forRoot()  becayse you configure
the router at the application's root level. The forRoot()
method supplies the service providers and directives needed
for routing, and performs the initial navigation
based on the current browser URL*/
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
   
})
export class AppRoutingModule { }
 