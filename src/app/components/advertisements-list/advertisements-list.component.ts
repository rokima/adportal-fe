import {Component, OnInit} from '@angular/core';
import {AdvertisementService} from '../../services/advertisement.service';
import {ClassifierService} from '../../services/classifier.service';
import {Advertisement} from '../../models/advertisement';
import {Category} from '../../models/category';

@Component({
  selector: 'adp-advertisements-list',
  templateUrl: './advertisements-list.component.html'
})
export class AdvertisementsListComponent implements OnInit {
  loaded = false;
  advertisements: Advertisement[];
  categories: Category[];
  categoriesMap: any = {};

  constructor(private advertisementService: AdvertisementService,
              private classifierService: ClassifierService) {
  }

  ngOnInit(): void {
    this.advertisementService.getAllAdvertisements().subscribe(res => {
      this.prepareCategories();
      this.advertisements = res;
      this.loaded = true;
    });
  }

  private prepareCategories() {
    this.categories = this.classifierService.getCategories();
    this.categories.forEach(category => {
      this.categoriesMap[category.Id] = category.Name;
    });
  }
}
