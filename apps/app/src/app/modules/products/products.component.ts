import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../core/models/products';
import { ProductsService } from '../../core/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { combineLatest, firstValueFrom, Observable, of, Subject, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {

  products$!: Observable<Product[]>;
  categories$!: Observable<string[]>;
  selectedCategory: string | undefined;
  sort: FormControl = new FormControl();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeSnapshot = this.activatedRoute.snapshot;
    this.selectedCategory = routeSnapshot.url[0].path === 'products' ?
      undefined : routeSnapshot.url[0].path;
    this.products$ = this.selectedCategory ?
      this.productsService.getProductsByCategory(this.selectedCategory) :
      this.productsService.getProducts();
    this.categories$ = this.productsService.getProductsCategories();
    combineLatest([this.sort.valueChanges, this.products$]).pipe(
      takeUntil(this.destroy$),
    ).subscribe(
      ([sort, products]) => {
        this.products$ = of(products.sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price));
      })
  }

  showCategory(category: string) {
    this.router.navigate([`${category}/products`]);
  }

  deleteProduct(productId: number): void {
    firstValueFrom(
      this.productsService.deleteProduct(productId)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
