import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddproductComponent } from './Admin/addproduct/addproduct.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { GetcategoryComponent } from './Admin/getcategory/getcategory.component';
import { GetproductComponent } from './Admin/getproduct/getproduct.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { ProfileComponent } from './User/profile/profile.component';
import { EditprofileComponent } from './User/editprofile/editprofile.component';
import { VoucherComponent } from './voucher/voucher.component';
import { PostvoucherComponent } from './postvoucher/postvoucher.component';
import { EditvoucherComponent } from './editvoucher/editvoucher.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    NavbarComponent,
    SingleproductComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    AddcategoryComponent,
    AddproductComponent,
    DashboardComponent,
    GetcategoryComponent,
    GetproductComponent,
    EditcategoryComponent,
    EditproductComponent,
    ProfileComponent,
    EditprofileComponent,
    VoucherComponent,
    PostvoucherComponent,
    EditvoucherComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
