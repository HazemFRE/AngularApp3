import { Component } from '@angular/core';
import { APIURLService } from '../service/apiurl.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
   constructor(private _service: APIURLService)//inject service to component
  {

  }
  ngOnInit() {
    this.get();
  }
  Categories: any
  get() {
    this._service.getData().subscribe(data => this.Categories = data);
  }

}
