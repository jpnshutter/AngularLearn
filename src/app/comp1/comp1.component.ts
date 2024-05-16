import { Component, Input } from '@angular/core';

@Component({
  selector: 'Appcomp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
 @Input() productName!:string;
}
