import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductsListAllComponent } from './products-list-all/products-list-all.component';




@NgModule({
  declarations: [
    ProductEditComponent, 
    ProductListComponent, 
    ProductViewComponent, 
    ProductAddComponent,
    ProductsListAllComponent,
  ],

  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
   

  ]
})

export class ProductModule { }
