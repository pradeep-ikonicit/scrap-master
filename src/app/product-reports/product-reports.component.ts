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

  getFileContent() {
    window.location.assign(
      ".assets/reprotfiles/ALL_PRODUCTS_REPORT.PDF"
    );
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
    console.log("productReportType",proReportType);
  }
}
