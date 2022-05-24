import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChildren (AddressComponent) private address: AddressComponent[];
  public fg: FormGroup;
  private submitRequested: boolean;

  constructor(private fb: FormBuilder) { 
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'address': AddressComponent.CreateFormGroup(fb)
    });
  }

  ngOnInit() {
  }

  handleSubmit(){
    this.submitRequested = true;
    this.address.forEach(it => it.submitRequest());
    console.log(this.fg.value);
  }

  public isValid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
