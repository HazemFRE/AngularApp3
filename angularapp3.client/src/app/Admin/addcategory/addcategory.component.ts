import { Component } from '@angular/core';
import { APIURLService } from '../../service/apiurl.service';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {

  constructor(private _ser: APIURLService) {
  }

  ngOnInit() { }

  addcategory(data: any) {
    this._ser.addcategory(data).subscribe(() => {
      alert("added")
    })
  }

}
