import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FetchdataService } from '../fetchdata.service';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  subcategory: string;
}


@Component({
  selector: 'app-compby-id',
  standalone: true,
  imports: [RouterModule],
  providers:[FetchdataService],
  templateUrl: './compby-id.component.html',
  styleUrl: './compby-id.component.css'
})
export class CompbyIdComponent {
  public productId :string;
  public detail?:Product ;
  public _mockdata:Product[]=[]
  constructor(private ActivateRoute :ActivatedRoute,private fetchdataService:FetchdataService){
    let productID =this.ActivateRoute.snapshot.paramMap.get('productId');
    console.log(productID);
    this.productId=productID||'';
    this.fetchdataService.observable.subscribe(data => {
      this._mockdata = data;
      console.table(data);
    });

    this.fetchdataService.test()
    this.detail = this._mockdata.find((ele) => ele.id === parseInt(this.productId));
  }






}
