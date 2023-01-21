import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/products';
import { Observable } from 'rxjs'
import { ProductsService } from '../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productId!: number;
  product$!: Observable<Product>
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.product$ = this.productsService.getProductById(this.productId)
  }
}
