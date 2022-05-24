import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  @Input() public FormItem: FormGroup;
  private submitRequested: boolean;
  
  constructor(public fb: FormBuilder) { 
    this.FormItem = AddressComponent.CreateFormGroup(this.fb);
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'province': [null, Validators.required],
      'zipcode': [null, Validators.required]
    });
  }

  public submitRequest(){
    this.submitRequested = true;
    console.log(this.FormItem.value);
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  ngOnInit() {}

}
