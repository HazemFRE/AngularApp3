import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddproductComponent } from './Admin/addproduct/addproduct.component';
import { GetproductComponent } from './Admin/getproduct/getproduct.component';
import { GetcategoryComponent } from './Admin/getcategory/getcategory.component';

const routes: Routes = [

  { path: "category/:id", component: CategoryComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "Singleproduct/:id", component: SingleproductComponent },
  { path: "signUp", component: RegistrationComponent },
  { path: "signIn", component: LoginComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "addcategory", component: AddcategoryComponent },
      { path: "addproduct", component: AddproductComponent },
      { path: "getproduct", component: GetproductComponent },
      { path: "getcategory", component: GetcategoryComponent }

   
  ] }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
