import { Routes } from '@angular/router';
import { ComponentDetailComponent } from './component-detail/component-detail.component';
import { Comp1Component } from './comp1/comp1.component';
import { HomeComponent } from './home/home.component';
import { CompbyIdComponent } from './compby-id/compby-id.component';
import { FormComponent } from './form/form.component';
import { DirectiveComponent } from './directive/directive.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  {path:'product-detail/:productId',component:CompbyIdComponent},
  {path:'product-detail',component:ComponentDetailComponent},
  {path:'',component:HomeComponent},
  {path:'form',component:FormComponent},
  {path:'directive',component:DirectiveComponent},
  {path:'manage',component:DashboardComponent},

  {path:'**',component:Comp1Component},

];
