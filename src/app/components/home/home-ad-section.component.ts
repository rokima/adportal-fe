import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'adp-home-ad-section',
  templateUrl: './home-ad-section.component.html'
})
export class HomeAdSectionComponent implements OnInit {
  @Input() category: Category;

  ngOnInit() {

  }
}
