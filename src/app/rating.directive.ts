import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[rating]',
})
export class RatingDirective implements OnInit, AfterViewInit {
  private inputValue: number = 0;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.inputValue = parseInt(this.elementRef.nativeElement.innerHTML);
    this.convertToRatingStar();
  }

  private convertToRatingStar() {
    this.elementRef.nativeElement.innerHTML = '';
    for (let i = 1; i <= this.inputValue; i++) {
      const star = this.renderer.createElement('span');
      if (i <= this.inputValue) {
        this.renderer.addClass(star, 'filled');
      }
      this.renderer.appendChild(this.elementRef.nativeElement, star);
    }
  }
}
