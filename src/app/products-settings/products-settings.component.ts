import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-settings',
  templateUrl: './products-settings.component.html',
  styleUrls: ['./products-settings.component.css']
})
export class ProductsSettingsComponent implements OnInit {

  

  ngOnInit(): void {
    this.quantities().push(this.fb.group({  fieldLabel: 'Price1',  description: 'Custom Label Input Field', lableInput: 'Normal Price', })  )
    this.quantities().push(this.fb.group({  fieldLabel: 'Price2',  description: 'Custom Label Input Field', lableInput: 'Offer Price', }) ) 
    this.quantities().push(this.fb.group({  fieldLabel: 'Price3',  description: 'Custom Label Input Field', lableInput: 'Additional Cost', })  )
  }
  productForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
     
    this.productForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) , 
      productfiles: this.fb.array([]) ,  
    });  
  }  
    
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
  productfiles() : FormArray {  
    return this.productForm.get("productfiles") as FormArray  
  }     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      fieldLabel: '',  
      description: '', 
      lableInput: '',  
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  

  newProductFile(): FormGroup {  
    return this.fb.group({  
      fieldLabel: '',  
      description: '', 
      lableInput: '',  
    })  
  }  
     
  addProductImages() {  
    this.productfiles().push(this.newProductFile());  
  }  
  
  removeProductFile(i:number) {  
    this.productfiles().removeAt(i);  
  } 
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.productForm.value);  
  }  
}
