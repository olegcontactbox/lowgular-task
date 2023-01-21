import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductsService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required,]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]],
    })
  }

  submit(): void {
    if (this.form.valid) {
      this.productService.addProduct(this.form.value).pipe(
        first(),
      ).subscribe(() => {
        this.router.navigate(['/products'])
      })
    }
  }
}
