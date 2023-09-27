import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post.component';
import { PostRowComponent } from './post-row.component';
import { PostViewComponent } from './post-view.component';
import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { PostService } from './post.service';
import { PostEditComponent } from './post-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostComponent,
    PostEditComponent,
    PostRowComponent,
    PostViewComponent,
  ],
  imports: [CommonModule, SharedModule, PostRoutingModule, ReactiveFormsModule],
  providers: [PostService],
})
export class PostModule {}
