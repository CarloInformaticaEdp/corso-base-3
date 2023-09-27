import { Component, Input } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
})
export class PostEditComponent {
  protected loading = false;
  @Input() post: Post = { id: 0, title: '', body: '' };
  formGroup: FormGroup = {} as FormGroup;

  constructor(
    private fb: FormBuilder,
    public postService: PostService,
    private route: ActivatedRoute
  ) {
    this.loading = true;
    this.post.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.post.id !== null) {
      this.getPost(this.post.id);
    }
  }

  OnSubmit() {
    console.log(this.formGroup);
  }

  OnReset() {
    this.formGroup.reset();
  }

  createFormGroup() {
    this.formGroup = this.fb.group({
      id: [this.post.id, Validators.required],
      title: [this.post.title],
      body: [this.post.body],
    });
  }

  getPost(id: number) {
    this.postService.getPost(id).then((result) => {
      this.post = result;
      this.createFormGroup();
      this.loading = false;
    });
  }
}
