import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'zone.js';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { AppHomeComponent } from './app-home.component';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppHomeComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
