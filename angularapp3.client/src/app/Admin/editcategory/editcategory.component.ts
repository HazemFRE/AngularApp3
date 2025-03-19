import { Component } from '@angular/core';
import { APIURLService } from '../../service/apiurl.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrl: './editcategory.component.css'
})
export class EditcategoryComponent {
  ngOnInit() { }

  categoryId: any

  constructor(private _ser: APIURLService, private _active: ActivatedRoute) { }

  updatecategory(data: any) {
    this.categoryId = this._active.snapshot.paramMap.get("id")
    this._ser.updatecategory(this.categoryId, data).subscribe(() => {

      alert("update successfully")
    } )
  }
}
