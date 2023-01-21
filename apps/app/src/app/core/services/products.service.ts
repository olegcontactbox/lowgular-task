import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductCreationDTO } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`https://fakestoreapi.com/products`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `https://fakestoreapi.com/products/category/${category}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }

  getProductsCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  addProduct(product: ProductCreationDTO): Observable<number> {
    return this.httpClient.post<number>('https://fakestoreapi.com/products', product);
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.httpClient.delete<Product>(`https://fakestoreapi.com/products/${productId}`);
  }
}
