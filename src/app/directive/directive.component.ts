import { CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ExampleDirective } from './example.directive';
import { CatService } from '../cat.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';



@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule,ExampleDirective,HttpClientModule,JsonPipe,FormsModule],
  providers:[CatService],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})



export class DirectiveComponent implements OnInit,OnChanges{
  data :any;
  color={
    color:'red',
    'font-size':'30px'
  }
  isCustomClass = true;

  constructor(private catservice :CatService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('charge : ',changes);
  }

  ngOnInit(): void {
    this.catservice.getFact().subscribe(value=>{
      this.data =value
      console.log(value);
    });
  }


  colorText ='black'
  @Input() customColor: string = ''; // Default value is empty string

  // Output event to emit color changes (optional)
  @Output() colorChange = new EventEmitter<string>();

  updateColor(newColor: string) {
    this.colorText = newColor;
    this.colorChange.emit(newColor); // Emit color change if Output is used
  }

}
