import { Component } from '@angular/core';
import { APIURLService } from '../../service/apiurl.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  constructor(private _ser: APIURLService) {

  }
  ngOnInit() { }

  addproduct(data: any) {

    this._ser.addproduct(data).subscribe(() => {


    })
  }
}
