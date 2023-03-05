import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrackerComponent } from './tracker/tracker.component';
import { AddTrackerComponent } from './add-tracker/add-tracker.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { ProductSuitePageComponent } from './product-suite-page/product-suite-page.component';
import { ReportsComponent } from './reports/reports.component';
import { ProductReportsComponent } from './product-reports/product-reports.component';
import { TrackerReportsComponent } from './tracker-reports/tracker-reports.component';
import { AlertReportsComponent } from './alert-reports/alert-reports.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { ProductsSettingsComponent } from './products-settings/products-settings.component';
import { TrackerSettingsComponent } from './tracker-settings/tracker-settings.component';
// import { ProductsModule } from './products/products.module';
// import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    DashboardComponent,
    TrackerComponent,
    AddTrackerComponent,
    AddProductComponent,
    AlertsComponent,
    AddAlertComponent,
    ProductSuitePageComponent,
    ReportsComponent,
    ProductReportsComponent,
    TrackerReportsComponent,
    AlertReportsComponent,
    SettingsHomeComponent,
    ProductsSettingsComponent,
    TrackerSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
