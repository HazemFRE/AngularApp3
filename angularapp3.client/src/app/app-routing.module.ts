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
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { EditprofileComponent } from './User/editprofile/editprofile.component';
import { VoucherComponent } from './voucher/voucher.component';
import { PostvoucherComponent } from './postvoucher/postvoucher.component';
import { EditvoucherComponent } from './editvoucher/editvoucher.component';



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
            { path: "getcategory", component: GetcategoryComponent },
            { path: "editcategory/:id", component: EditcategoryComponent },
            { path: "editproduct/:id", component: EditproductComponent },
            { path: "editprofile/:id", component: EditprofileComponent },
          





        ]
    }
    ,
    { path: "voucher", component: VoucherComponent },
    { path: "postvoucher", component: PostvoucherComponent },
    { path: "editvoucher/:id", component: EditvoucherComponent }, 

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
