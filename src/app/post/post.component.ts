import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  @Input() list: Post[] = [];
  @Input() test: string = "";

  constructor(public postService: PostService) {
    console.log('costruttore');
  }

  ngOnInit() {
    console.log('1');
    this.postService.getPosts().then((posts) => {
      console.log('2');
      this.list = posts;
    }, console.log);    
    console.log('3');
    console.log(this.list);
  }
}
