import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

const routes: Routes = [

  { path: "category/:id", component: CategoryComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "Singleproduct/:id", component: SingleproductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
