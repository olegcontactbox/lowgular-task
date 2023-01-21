import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddProductComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class CreateProductModule { }
