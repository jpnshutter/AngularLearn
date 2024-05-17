import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class CatService {
  constructor(private http:HttpClient) {
  
  }
  getFact(): Observable<any> {
    return this.http.get('https://catfact.ninja/fact')
      .pipe(
        catchError(error => {
          console.error('Error fetching cat fact:', error);
          // Optionally, return a default value for UI handling
          return of({ fact: 'Failed to fetch cat fact (check network!)' });
        })
      );
  }

  postData(){
    return this.http.post('https://catfact.ninja/fact',{name:'jaja'})
  }

  getData(){
    return {name:'mini',age:3}
  }

  getCart():Observable<any>{
    return this.http.get('https://dummyjson.com/carts')
      .pipe(
        catchError(error => {
          console.error('Error fetching cat fact:', error);
          // Optionally, return a default value for UI handling
          return of({ fact: 'Failed to fetch ' });
        })
      );

  }

  getSalesChart() {
    const currentYear = new Date().getFullYear();
    const startYear = 2010;
    const salesData = [];
    const returnsData = [];

    for (let year = startYear; year <= currentYear; year++) {
      salesData.push({ x: new Date(year, 0, 1).getTime(), y: Math.floor(Math.random() * 20000) + 1500 });
      returnsData.push({ x: new Date(year, 0, 1).getTime(), y: -Math.floor(Math.random() * 5000) });
    }

    const options = {
      series: [{
        name: 'sales',
        data: salesData
      },{
        name: 'retuen',
        data: returnsData
      }],
      chart: {
        type: 'area',
        height: 350
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Online Shopping Metrics',
        align: 'left',
        style: {
          fontSize: '14px'
        }
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 4,
        floating: false,
        labels: {
          style: {
            colors: '#8e8da4',
          },
          offsetY: -7,
          offsetX: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        }
      },
      fill: {
        opacity: 0.5
      },
      tooltip: {
        x: {
          format: "yyyy",
        },
        fixed: {
          enabled: false,
          position: 'topRight'
        }
      },
      grid: {
        yaxis: {
          lines: {
            offsetX: -30
          }
        },
        padding: {
          left: 20
        }
      }
    };

    return options;
  }


}
