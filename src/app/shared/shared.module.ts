import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { AppJoinPipe } from './app-join.pipe';
import { AppHighlightDirective } from './app-highlight.directive';

@NgModule({
  declarations: [AppJoinPipe, AppHighlightDirective],
  providers: [AppJoinPipe],
  exports: [
    FormsModule,
    CommonModule,
    CoreModule,
    AppJoinPipe,
    AppHighlightDirective,
  ],
})
export class SharedModule {}
