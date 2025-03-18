import { Component } from '@angular/core';
import { APIURLService } from '../service/apiurl.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private _url: APIURLService) {
  }

  ngOnInit() { }

  post(data: any) {

    this._url.postNewuser(data).subscribe(() => {

      alert("add new user");

    })

   
  }

}
