import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpInterceptorService } from './http-interceptor.service';

import { AppStateManagerService } from './app-state-manager.service';

@NgModule({
  imports: [NgxWebstorageModule.forRoot()],
  exports: [NgxWebstorageModule, HttpClientModule],
  providers: [
    //AppStateManagerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
