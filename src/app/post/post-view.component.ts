import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
})
export class PostViewComponent {
  @Input() post: Post = { id: 0, title: '', body: '' };

  constructor(public postService: PostService, private route: ActivatedRoute) {
    this.post.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.post.id) {
      this.getPost(this.post.id);
    }

    //this.route.params.subscribe((params) => {  });
  }

  getPost(id: number) {
    this.postService.getPost(id).then((result) => {
      this.post = result;
    });
  }
}
