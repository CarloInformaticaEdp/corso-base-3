import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class PostService {
  constructor(public httpClient: HttpClient) {}
  getPosts(): Promise<any> {
    return this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .toPromise();
  }

  getPost(id: number): Promise<any> {
    return this.httpClient
      .get<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
      .toPromise();
  }
}
