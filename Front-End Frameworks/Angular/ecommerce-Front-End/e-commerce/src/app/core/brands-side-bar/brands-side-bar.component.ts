import { Component, OnInit, Input } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-brands-side-bar',
  templateUrl: './brands-side-bar.component.html',
  styleUrls: ['./brands-side-bar.component.scss']
})
export class BrandsSideBarComponent implements OnInit {
  @Input() allBrands: Brand[];
  @Input() brand: Brand;

  constructor() { }

  ngOnInit() {
  }

}
