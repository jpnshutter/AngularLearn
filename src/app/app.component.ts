import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShareService } from './share.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Comp2Component,NavBarComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message?:string ='initial text';
  constructor(private shareService:ShareService){
    this.shareService.observable.subscribe(result=>{
      console.log('Log from AppComp : ',result);
    })

  }
  title = 'my-app2';

  alert(message:string){
    console.log(message);
    this.shareService.subject.next(this.message||'')
  }
  onInputChange(){
    this.shareService.subject.next(this.message||'')
  }
}

function plus(num1:number,num2:number){
  return num1+num2
}
function sum(...args:number[]){
  return args.reduce((prev,cur)=>
    prev+cur
  ,0)
}
function powerDefault(num:number ,power:number =1){
  return Math.pow(num,power)
}
console.log('plus : ',plus(1,2));
console.log('sum : ',sum());
console.log(powerDefault(3,10));

class User{
  private username?:string ;
  private password?:string;
  constructor (username : string ,password:string){
    this.username=username;
    this.password=password;
  }
  public login():boolean{
    if(this.username == null || this.password==null){
      return false
    }else if(this.username =='admin' && this.password== '123456'){
      return true
    }else{
      return false;
    }
  }
}

const user1 =new User('admin','123456')
console.log(user1.login());


class DataHolder<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberHolder = new DataHolder<number>(42);
const stringHolder = new DataHolder<string>("Hello");

console.log(numberHolder.getValue()); // Outputs 42
console.log(stringHolder.getValue()); // Outputs "Hello"

let persoon:Array<{name:string}> =[{name:'admin0'},{name:'somsak'}]



let person =persoon.map((ele)=>{
  return ele.name+' map'})
console.log(person);
