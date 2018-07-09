import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderHighlightDirective } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BorderHighlightDirective
  ],
  exports: [
    BorderHighlightDirective
  ]
})
export class SharedModule { }
