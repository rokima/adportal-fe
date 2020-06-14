import {Component, OnInit} from '@angular/core';
import {AdvertisementService} from '../../services/advertisement.service';
import {ClassifierService} from '../../services/classifier.service';
import {Advertisement} from '../../models/advertisement';
import {Category} from '../../models/category';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'adp-advertisements-list',
  templateUrl: './advertisements-list.component.html'
})
export class AdvertisementsListComponent implements OnInit {
  loaded = false;
  advertisements: Advertisement[];
  categories: Category[];
  categoriesMap: any = {};
  categoryId = null;

  constructor(private advertisementService: AdvertisementService,
              private classifierService: ClassifierService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.queryParamMap.get('categoryId');
    this.prepareCategories();
    this.loadAdvertisements(this.categoryId);
  }

  loadAdvertisements(categoryId) {
    this.loaded = false;
    if (categoryId) {
      this.advertisementService.getAdvertisementsByCategory(categoryId).subscribe(res => {
        this.displayAdvertisements(res);
      });
    } else {
      this.advertisementService.getAllAdvertisements().subscribe(res => {
        this.displayAdvertisements(res);
      });
    }
  }

  private displayAdvertisements(advertisements: Advertisement[]) {
    this.advertisements = advertisements;
    this.loaded = true;
  }

  private prepareCategories() {
    this.categories = this.classifierService.getCategories();
    this.categories.forEach(category => {
      this.categoriesMap[category.Id] = category.Name;
    });
  }
}
