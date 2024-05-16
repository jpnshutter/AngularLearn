import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';
import { ErrorHighlightDirective} from './error-highlight.directive';
import { ShowIfAllValidDirective } from './show-if-all-valid.directive';
import { FormatDataPipe } from './format-data.pipe';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,JsonPipe,CommonModule,ErrorHighlightDirective,ShowIfAllValidDirective,FormatDataPipe ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})



export class FormComponent {
  group :FormGroup =new FormGroup({
    name: new FormControl({value:'',disabled:false},Validators.required),
    lastname: new FormControl({value:'',disabled:false},Validators.required),
    age: new FormControl(null,[Validators.min(0),Validators.required]),
    CitizenId: new FormControl(null,[Validators.pattern('^[0-9]{13}$'),Validators.required]),
    email: new FormControl(null,[Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.required]),
    password: new FormControl(null,[Validators.minLength(8),Validators.maxLength(100),Validators.required]),
    // array: new FormArray([
    //   new FormControl(),
    //   new FormControl()
    // ])
  })
  constructor(){
    this.group.markAllAsTouched()
    this.group.controls['email'].valueChanges.pipe(debounceTime(3000)).subscribe(value =>{
      this.sendmail(value)
    })
  }

  Control(name:string) {
    return this.group.controls[name]
  }

  getArrayControl(){
    return this.group.get('array') as FormArray
  }

  sendmail(email:string){
    console.log(email);
  }
}
