import { Component } from '@angular/core';
import { APIURLService } from '../service/apiurl.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editvoucher',
  templateUrl: './editvoucher.component.html',
  styleUrl: './editvoucher.component.css'
})
export class EditvoucherComponent {

  constructor(private _url: APIURLService, private _route: ActivatedRoute) { }

  voucherId: any

  ngOnInit() { this.voucherId = this._route.snapshot.paramMap.get("id") }

  editvoucher(  data : any ) {

    this._url.editvoucher(this.voucherId, data).subscribe(() => {

      alert("update successfully")
    })
  }

}
