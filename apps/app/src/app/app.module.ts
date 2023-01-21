import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { ProductsModule } from './modules/products/products.module';
import { CreateProductModule } from './modules/add-product/add-product.module';
import { ProductModule } from './modules/product/product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MaterialModule, RouterModule, AppRoutingModule, ProductsModule, ProductModule, CreateProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
