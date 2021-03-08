import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsListAllComponent } from './products-list-all/products-list-all.component';


const routes: Routes = [
  { path: 'products-list-all', component: ProductsListAllComponent},
  { path: 'products-list', component: ProductListComponent},
  { path: 'product-edit/:id', component: ProductEditComponent},
  { path: 'product-view/:id', component: ProductViewComponent},
  { path: 'product-add', component: ProductAddComponent},
  // { path: '', pathMatch: 'full', redirectTo: 'product-add' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
