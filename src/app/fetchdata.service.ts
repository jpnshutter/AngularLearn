import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  subcategory: string;
}




const _mockdata:Product[]=[
    {
      "id": 1,
      "name": "Laptop",
      "description": "High-performance laptop with Intel i7 processor and 16GB RAM",
      "price": 1200,
      "quantity": 10,
      "category": "Electronics",
      "subcategory": "Computers"
    },
    {
      "id": 2,
      "name": "Desktop PC",
      "description": "Powerful desktop PC with AMD Ryzen processor and NVIDIA graphics",
      "price": 1500,
      "quantity": 8,
      "category": "Electronics",
      "subcategory": "Computers"
    },
    {
      "id": 3,
      "name": "Monitor",
      "description": "27-inch 4K monitor with IPS panel and slim bezels",
      "price": 400,
      "quantity": 8,
      "category": "Electronics",
      "subcategory": "Computers"
    },
    {
      "id": 4,
      "name": "Tablet",
      "description": "10-inch tablet with octa-core processor and 128GB storage",
      "price": 300,
      "quantity": 12,
      "category": "Electronics",
      "subcategory": "Computers"
    },
    {
      "id": 5,
      "name": "Wireless Mouse",
      "description": "Ergonomic wireless mouse with customizable buttons",
      "price": 50,
      "quantity": 30,
      "category": "Electronics",
      "subcategory": "Accessories"
    },
    {
      "id": 6,
      "name": "Gaming Keyboard",
      "description": "Mechanical gaming keyboard with RGB backlighting",
      "price": 100,
      "quantity": 25,
      "category": "Electronics",
      "subcategory": "Accessories"
    },
    {
      "id": 7,
      "name": "External Hard Drive",
      "description": "2TB portable external hard drive with USB 3.0 connectivity",
      "price": 80,
      "quantity": 18,
      "category": "Electronics",
      "subcategory": "Accessories"
    },
    {
      "id": 8,
      "name": "Bluetooth Speaker",
      "description": "Waterproof Bluetooth speaker with 20W output",
      "price": 70,
      "quantity": 22,
      "category": "Electronics",
      "subcategory": "Accessories"
    },
    {
      "id": 9,
      "name": "Wireless Earbuds",
      "description": "True wireless earbuds with noise isolation technology",
      "price": 120,
      "quantity": 15,
      "category": "Electronics",
      "subcategory": "Accessories"
    },
    {
      "id": 10,
      "name": "Fitness Tracker",
      "description": "Fitness tracker with heart rate monitor and activity tracking",
      "price": 90,
      "quantity": 20,
      "category": "Electronics",
      "subcategory": "Accessories"
    },
    {
      "id": 11,
      "name": "Digital Camera",
      "description": "Mirrorless digital camera with 24MP sensor and 4K video recording",
      "price": 1500,
      "quantity": 8,
      "category": "Electronics",
      "subcategory": "Cameras"
    },
    {
      "id": 12,
      "name": "Wireless Webcam",
      "description": "HD webcam with built-in microphone for video conferencing",
      "price": 80,
      "quantity": 20,
      "category": "Electronics",
      "subcategory": "Cameras"
    },
    {
      "id": 13,
      "name": "Wireless Charger",
      "description": "Qi-compatible wireless charger with fast charging support",
      "price": 40,
      "quantity": 25,
      "category": "Electronics",
      "subcategory": "Chargers & Power"
    },
    {
      "id": 14,
      "name": "Power Bank",
      "description": "20000mAh power bank with dual USB ports",
      "price": 50,
      "quantity": 20,
      "category": "Electronics",
      "subcategory": "Chargers & Power"
    },
    {
      "id": 15,
      "name": "Wireless Router",
      "description": "Dual-band wireless router with MU-MIMO technology",
      "price": 120,
      "quantity": 15,
      "category": "Electronics",
      "subcategory": "Networking"
    },
    {
      "id": 16,
      "name": "Wireless Printer",
      "description": "All-in-one wireless printer with scanning and copying functions",
      "price": 200,
      "quantity": 10,
      "category": "Electronics",
      "subcategory": "Networking"
    },
    {
      "id": 17,
      "name": "Smartwatch",
      "description": "Water-resistant smartwatch with customizable watch faces",
      "price": 250,
      "quantity": 12,
      "category": "Electronics",
      "subcategory": "Wearable Tech"
    },
    {
      "id": 18,
      "name": "External SSD",
      "description": "500GB external SSD with USB-C interface",
      "price": 120,
      "quantity": 15,
      "category": "Electronics",
      "subcategory": "Storage"
    }
  ];


@Injectable({
  providedIn: 'root'
})
export class FetchdataService  {
  subject : Subject<Product[]> = new Subject();
  observable : Observable<Product[]> =this.subject.asObservable();

  constructor() {
    this.subject.next(_mockdata)
    this.subject.subscribe((ele)=>{console.log(ele);})
  }

  test(){
    this.subject.next(_mockdata)
  }







}




