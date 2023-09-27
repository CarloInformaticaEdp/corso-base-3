import { Component, Input } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Post } from './post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
})
export class PostEditComponent {
  @Input() post: Post = { id: 0, title: '', body: '' };
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      id: [this.post.id, Validators.required],
      title: [this.post.title],
      body: [this.post.title],
    });
  }
}
