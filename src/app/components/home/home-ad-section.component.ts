import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {AdvertisementService} from '../../services/advertisement.service';
import {Advertisement} from '../../models/advertisement';

@Component({
  selector: 'adp-home-ad-section',
  templateUrl: './home-ad-section.component.html'
})
export class HomeAdSectionComponent implements OnInit {
  @Input() category: Category;
  advertisements: Advertisement[] = [];
  loaded = false;

  constructor(private advertisementService: AdvertisementService) {
  }

  ngOnInit() {
    this.advertisementService.getAdvertisementsByCategory(this.category.Id).subscribe(res => {
      this.advertisements = res;
      this.loaded = true;
    });
  }
}
