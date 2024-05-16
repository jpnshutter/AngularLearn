import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup, FormArray } from '@angular/forms';

@Directive({
  selector: '[appShowIfAllValid]',
  standalone: true
})
export class ShowIfAllValidDirective {

  @Input() control: FormGroup | FormArray | undefined;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {


  }

  ngOnChanges(): void {

    if (this.control) {
      console.log('test');
      this.updateView();
      this.control.statusChanges.subscribe(() => this.updateView());
    }
  }

  private updateView() {
    if (this.control instanceof FormGroup) {
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: this.control.valid });
    } else if (this.control instanceof FormArray) {
      const allValid = this.control.controls.every(control => control.valid);
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: allValid });
    } else {
      console.error('Unsupported control type for ShowIfAllValidDirective:', this.control);
      // Handle the error (e.g., throw an exception, log a message)
    }
  }


}
