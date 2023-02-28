import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { TrackerComponent } from './tracker/tracker.component';
import { AddTrackerComponent } from './add-tracker/add-tracker.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AddAlertComponent } from './add-alert/add-alert.component';

const routes: Routes = [
  {
    path : '',
    component: LoginComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    loadChildren: () =>
      import('./products/products.module').then(
        (route) => route.ProductsModule
      )
  },
  {
    path: 'tracker',
    component: TrackerComponent
  },
  {
    path: 'add-tracker',
    component: AddTrackerComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: 'add-alert',
    component: AddAlertComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
