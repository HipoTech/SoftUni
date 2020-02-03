import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get allProducts() {
    return this.homeService.products;
  }

  constructor(private homeService: HomeService) {
    this.homeService.getAllProducts();
  }

  ngOnInit() {

  }

}
