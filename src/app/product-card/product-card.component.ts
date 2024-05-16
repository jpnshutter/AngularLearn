import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule],
  providers:[FetchdataService],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: Product | undefined; // Optional type annotation if using Product interface
}
