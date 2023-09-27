import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostViewComponent } from './post-view.component';
import { PostEditComponent } from './post-edit.component';

const ROUTES: Routes = [
  {
    path: 'list',
    component: PostComponent,
    data: { showHeader: false, area: 'post' },
  },
  {
    path: 'view/:id',
    component: PostViewComponent,
    data: { showHeader: false, area: 'post' },
  },
  {
    path: 'edit/:id',
    component: PostEditComponent,
    data: { showHeader: false, area: 'post' },
  },
  {
    path: 'my-post/',
    component: PostComponent,
    data: { onlyMyPost: true },
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
