import { Component } from '@angular/core';
import { APIURLService } from '../service/apiurl.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {
  constructor(private _ser : APIURLService) { }
  ngOnInit() { this.getvoucher() }
  voucherdata: any
  getvoucher() {
    this._ser.getvoucher().subscribe((data) => {
      this.voucherdata = data
    })

    
  }

}
