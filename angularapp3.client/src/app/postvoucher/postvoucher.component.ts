import { Component } from '@angular/core';
import { APIURLService } from '../service/apiurl.service';

@Component({
  selector: 'app-postvoucher',
  templateUrl: './postvoucher.component.html',
  styleUrl: './postvoucher.component.css'
})
export class PostvoucherComponent {

  constructor(private _url: APIURLService) { }

  ngOnInit() { }

  postVoucher(data: any) {

    this._url.postvoucher(data).subscribe(() => {

      alert("Voucher added");
    })
  }
}

