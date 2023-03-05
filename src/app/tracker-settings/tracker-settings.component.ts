import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tracker-settings',
  templateUrl: './tracker-settings.component.html',
  styleUrls: ['./tracker-settings.component.css']
})
export class TrackerSettingsComponent implements OnInit {



  ngOnInit(): void {
  }
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]),
    });
  }

  quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
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

  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
