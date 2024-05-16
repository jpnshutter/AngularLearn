import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appErrorHighlight]',
  standalone: true
})
export class ErrorHighlightDirective {

  @Input() control: AbstractControl | undefined;

  @HostBinding('style.border') borderColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(): void {
    if (this.control) {
      this.updateBorderColor();
      this.control.statusChanges.subscribe(() => this.updateBorderColor());
    }
  }

  private updateBorderColor() {
    this.borderColor = this.control?.errors ? '2px solid red' : '2px solid green';
  }

}
