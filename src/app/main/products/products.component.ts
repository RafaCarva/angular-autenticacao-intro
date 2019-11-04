import { Product } from './../product';
import { Observable } from 'rxjs';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.products$ = this.mainService.getPdroducts();
  }

}
