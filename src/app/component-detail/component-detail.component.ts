import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
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
  selector: 'app-component-detail',
  standalone: true,
  imports: [CommonModule ,RouterOutlet,ProductCardComponent],
  providers:[FetchdataService],
  templateUrl: './component-detail.component.html',
  styleUrl: './component-detail.component.css'
})
export class ComponentDetailComponent {
  public productId :string;
  public products: Product[]=[] ;
  constructor(private ActivateRoute :ActivatedRoute,private fetchdataService:FetchdataService){
    let productID =this.ActivateRoute.snapshot.paramMap.get('productId');
    console.log(productID);
    this.productId=productID||''
    this.fetchdataService.observable.subscribe(result => {
      console.log('Log from AppComp: ', result); // Log received data
      this.products = result; // Update component's products
    });

    this.fetchdataService.test()


  }













}
