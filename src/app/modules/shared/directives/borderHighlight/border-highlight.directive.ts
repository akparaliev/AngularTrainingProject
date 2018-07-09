import { Directive, ElementRef, HostListener, HostBinding, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appBorderHighlight]'
})
export class BorderHighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer) {}

  @HostBinding('style.cursor') get getCursor() {
    return 'move';
  }

  @HostListener('mouseover') onMouseOver() {
     this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
 }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.element.nativeElement, 'color', color);
  }
}
