import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
})
export class ProductsModule { }
