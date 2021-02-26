import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';


const routes: Routes = [
  
 
  { path: 'product-edit', component: ProductEditComponent},
  { path: 'product-view', component: ProductViewComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: '', pathMatch: 'full', redirectTo: 'product-list' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
