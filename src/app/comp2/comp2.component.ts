import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShareService } from '../share.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [RouterModule,AppComponent ],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  private _productName?:string;
  private _price?:number;





  constructor(private shareService2:ShareService){
    this.shareService2.observable.subscribe(result=>{
      this._productName=result;
      console.log('Log from AppComp2 : ',result);
    })

  }


  @Input()
  get productName() {
      return this._productName || '';
  }
  set productName(value :string){
      this._productName=value || '<no-name-set>';

  }
  @Input()
  get price() {
    return this._price || 0;
  }
  set price(value :number){
    this._price=Math.max(0,value) ;
  }

  @Output() notify = new EventEmitter()
  notiEvent(){
    this.notify.emit("hahaaa");
  }
}
