import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  imageUrlArray = ["../../../assets/golfeado.png",
                "../../../assets/empanada.png",
                "../../../assets/cachapa.png"];
  constructor() { }

  ngOnInit() {
  }

}
