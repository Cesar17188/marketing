import { Component,
  Input, 
  OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})
export class LugaresComponent implements OnInit {

   @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
