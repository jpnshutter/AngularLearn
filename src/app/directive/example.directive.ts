import { Directive, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[example]',
  standalone: true
})
export class ExampleDirective {
  color='';
  constructor(private el :ElementRef) {

   }
   ngAfterViewInit() {
    (this.el.nativeElement ?? document.body).style.backgroundColor = 'pink'; // Use document.body as fallback
  }


   @HostListener('mouseenter') onHover(){
      this.el.nativeElement.style.backgroundColor ='orange';
   }

   @HostListener('mouseleave') onLeave(){
    this.el.nativeElement.style.backgroundColor ='white';
 }

}
