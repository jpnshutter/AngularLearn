import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CatService } from '../cat.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [CatService],
  imports: [HttpClientModule, FormsModule, JsonPipe, CommonModule,MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartOptions: any;
  showSalesChart = true; // Initially set to true to show the dashboard
  cart: any;
  selectedSortOption = 'ascending';

  constructor(private catService: CatService, private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    this.chartOptions = await this.catService.getSalesChart(); 
    this.catService.getCart().subscribe(value => {
      this.cart = value;
      console.log('value:', value);
    });

    if (this.showSalesChart) {
      await this.renderChart();
    }
  }

  async onSalesClick(event: Event) {
    
    event.preventDefault();
    console.log('test1');
    if (!this.showSalesChart) {
      this.showSalesChart = true;
      this.cdr.detectChanges(); // Ensure Angular detects the change
      await this.renderChart();
    }
  }

  onOrdersClick(event: Event) {
    event.preventDefault();
    console.log('test2');
    if (this.showSalesChart) {
      this.showSalesChart = false;
      this.cdr.detectChanges(); 
    }
  }

  async renderChart() {
    if (typeof window !== 'undefined' && this.showSalesChart) {
      const chartElement = document.querySelector("#chart");
      if (chartElement && this.chartOptions) {
        const ApexCharts = (await import('apexcharts')).default;
        new ApexCharts(chartElement, this.chartOptions).render();
      } else {
        console.error("Chart element not found with ID 'chart'");
      }
    } else {
      console.error("Window object is not defined or showSalesChart is false");
    }
  }

  sortDataByTotal() {
    if (this.cart && this.cart['carts']) {
      this.cart['carts'].sort((a: { [x: string]: string; }, b: { [x: string]: string; }) => {
        const totalA = parseFloat(a['total']);
        const totalB = parseFloat(b['total']);
        if (this.selectedSortOption === 'ascending') {
          return totalA - totalB; 
        } else if (this.selectedSortOption === 'descending') {
          return totalB - totalA; 
        } else {
          return 0; 
        }
      });
    }
  }
  

}
