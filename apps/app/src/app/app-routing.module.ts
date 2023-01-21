import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./modules/add-product/add-product.component";
import { ProductComponent } from "./modules/product/product.component";
import { ProductsComponent } from "./modules/products/products.component";

const routes: Routes = [
  { path: 'product/:id', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  {
    matcher: (url) => {
      const isProductsByCategory = url[1]?.path === 'products';
      return isProductsByCategory ? { consumed: url } : null;
    }, component: ProductsComponent
  },
  { path: '**', redirectTo: 'products' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
