import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [CatService],
  imports: [HttpClientModule, FormsModule, JsonPipe, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartOptions: any;
  showSalesChart = true; // Initially set to true to show the dashboard
  cart: any;

  constructor(private catService: CatService) {}

  async ngOnInit() {
    this.chartOptions = await this.catService.getSalesChart(); 
    this.catService.getCart().subscribe(value => {
      this.cart = value;
      console.log('value:', value);
    });

    if (this.showSalesChart) {
      this.renderChart();
    }
  }

  async onSalesClick(event: Event) {
    event.preventDefault();
    if (!this.showSalesChart) {
      this.showSalesChart = true;
      await this.renderChart();
    }
  }

  onOrdersClick(event: Event) {
    event.preventDefault();
    if (this.showSalesChart) {
      this.showSalesChart = false;
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
}
