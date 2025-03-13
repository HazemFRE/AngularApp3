import { Component } from '@angular/core';
import { APIURLService } from '../service/apiurl.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private _Productservice: APIURLService, private route: ActivatedRoute,
  )//inject service to component
  {

  }
  ngOnInit() {
    this.getProducts();
  }
  categoryId: any
  Products: any
  filteredProducts: any
  getProducts() {
    this.categoryId = this.route.snapshot.paramMap.get("id");

    if (this.categoryId) {
      //console.log("hi");
      this._Productservice.getProducts().subscribe((data) => {
        this.Products = data;

        this.filteredProducts = this.Products.filter((product: any) => product.categoryId == this.categoryId);
      });
    }
  }

}
