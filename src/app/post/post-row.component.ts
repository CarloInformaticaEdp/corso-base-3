import { Component, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-post-row',
  templateUrl: './post-row.component.html',
})
export class PostRowComponent {
  @Input() post: Post = { id: 0, title: '', body: '' };
}
