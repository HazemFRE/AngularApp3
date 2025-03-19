import { Component } from '@angular/core';
import { APIURLService } from '../../service/apiurl.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {
  ngOnInit() { }

  productId: any

  constructor(private _ser: APIURLService, private _active: ActivatedRoute) { }

  updateproduct(data: any) {
    this.productId = this._active.snapshot.paramMap.get("id")
    this._ser.editproduct(this.productId, data).subscribe(() => {

      alert("update successfully")
    })
  }
}
