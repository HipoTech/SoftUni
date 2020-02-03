import { Component, OnInit, Input } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces/brand';

@Component({
  selector: 'app-brand-component',
  templateUrl: './brand-component.component.html',
  styleUrls: ['./brand-component.component.scss']
})
export class BrandComponentComponent implements OnInit {
  @Input() brand: Brand;

  constructor() { }

  ngOnInit() {
  }

}
