import {Component, OnInit} from '@angular/core';
import {AdvertisementService} from '../../services/advertisement.service';
import {Category} from '../../models/category';
import {ClassifierService} from '../../services/classifier.service';

@Component({
  selector: 'adp-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  categories: Category[];

  constructor(private advertisementService: AdvertisementService,
              private classifierService: ClassifierService) {

  }

  ngOnInit(): void {
    this.categories = this.classifierService.getCategories();
  }

}
