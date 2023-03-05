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
import { ProductSuitePageComponent } from './product-suite-page/product-suite-page.component';
import { ReportsComponent } from './reports/reports.component';
import { ProductReportsComponent } from './product-reports/product-reports.component';
import { TrackerReportsComponent } from './tracker-reports/tracker-reports.component';
import { AlertReportsComponent } from './alert-reports/alert-reports.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { ProductsSettingsComponent } from './products-settings/products-settings.component';
import { TrackerSettingsComponent } from './tracker-settings/tracker-settings.component';

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
    path: 'productsuite',
    component: ProductSuitePageComponent
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
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'product-reports',
    component: ProductReportsComponent
  },
  {
    path: 'tracker-reports',
    component: TrackerReportsComponent
  },
  {
    path: 'alert-reports',
    component: AlertReportsComponent
  },
  {
    path: 'settings-home',
    component: SettingsHomeComponent
  },
  {
    path: 'settings-products',
    component: ProductsSettingsComponent
  },
  {
    path: 'settings-trackers',
    component: TrackerSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
