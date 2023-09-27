import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home.component';
import { UserLoginComponent } from './user/user-login.component';

//import { PostComponent } from './post/post.component';
//import { PostViewComponent } from './post/post-view.component';

const ROUTES: Routes = [
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
    data: {},
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    data: {},
  },
  {
    path: 'home',
    component: AppHomeComponent,
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
