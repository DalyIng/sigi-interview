import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
// import { OtherComponent } from './other';

// const usersModule = () =>
//   import('./users/users.module').then((x) => x.UsersModule);

const OtherModule = () =>
  import('./other/other.module').then((x) => x.OtherModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'users', loadChildren: usersModule },
  // { path: 'other', component: OtherComponent },
  { path: 'other', loadChildren: OtherModule },


  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
