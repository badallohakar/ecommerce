import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  allproducts = [
    {
      name: 'Sun Cream',
      imageName: 'p1',
      price: 450,
    },
    {
      name: 'moon Cream',
      imageName: 'p2',
      price: 650,
    },
    {
      name: 'body lotion',
      imageName: 'p3',
      price: 850,
    },
    {
      name: 'lotion',
      imageName: 'p4',
      price: 250,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
