import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-product-reports',
  templateUrl: './product-reports.component.html',
  styleUrls: ['./product-reports.component.css']
})
export class ProductReportsComponent implements OnInit {
  allFlag = false;
  brandFlag = false;
  localeFlag = false;
  searchForm = this.formBuilder.group({
    productReportType: [''],
  });
  constructor( private readonly formBuilder: FormBuilder,) { }

  printProductReport(searchType: string) {
    if(searchType === 'ALL'){
      window.open("/assets/reportfiles/ALL_PRODUCTS_REPORT.PDF");
    }else if(searchType === 'BRAND'){
      window.open("/assets/reportfiles/PRODUCTS_BY_BRAND_REPORT.pdf");
     }else if(searchType === 'LOCALE'){
      window.open("/assets/reportfiles/PRODUCTS_BY_LOCALE_REPORT.pdf");
    } 
  }
  downloadProductCSVReport(searchType: string){
    if(searchType === 'ALL'){
      window.location.assign("/assets/reportfiles/ALL_PRODUCTS.csv");
    }else if(searchType === 'BRAND'){
      window.location.assign("/assets/reportfiles/PRODUCTSBY_BRAND.csv");
     }else if(searchType === 'LOCALE'){
      window.location.assign("/assets/reportfiles/PRODUCTSBY_LOCALE.csv");
    } 
   
  }
  ngOnInit(): void {
  }

  searchProductReport() {
   const proReportType = this.searchForm.get('productReportType')?.value;
   if(proReportType === 'ALL'){
    this.allFlag = true;
    this.brandFlag = false;
    this.localeFlag = false;
   }else if(proReportType === 'BRAND'){
    this.brandFlag = true;
    this.allFlag = false;
    this.localeFlag = false;
   }else if(proReportType === 'LOCALE'){
    this.allFlag = false;
    this.brandFlag = false;
    this.localeFlag = true;
   }else{
    this.allFlag = false;
    this.brandFlag = false;
    this.localeFlag = false;
   }
  }
}
