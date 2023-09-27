import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppStateManagerService } from '../core/app-state-manager.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  state: any;
  constructor(private stateManagerService: AppStateManagerService) {
    this.stateManagerService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        Authorization: `Basic ${this.state?.token}`,
      },
    });
  }
}
