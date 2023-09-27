import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class AppHighlightDirective {
  @Input() appHighlight: string = 'yellow';
  defaultColor = 'white';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor =
      this.appHighlight || this.defaultColor;
  }
  @HostListener('mouseleave') onMouseLEace() {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
