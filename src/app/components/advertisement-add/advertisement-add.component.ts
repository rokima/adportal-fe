import {Component, OnInit} from '@angular/core';
import {Advertisement} from '../../models/advertisement';
import {AdvertisementService} from '../../services/advertisement.service';
import {Category} from '../../models/category';
import {ClassifierService} from '../../services/classifier.service';

@Component({
  selector: 'adp-advertisement-add',
  templateUrl: './advertisement-add.component.html'
})
export class AdvertisementAddComponent implements OnInit {
  advertisement = new Advertisement();
  isAdvertisementAdded = false;
  categories: Category[] = [];

  constructor(private advertisementService: AdvertisementService,
              private classifierService: ClassifierService) {
  }

  ngOnInit() {
    this.categories = this.classifierService.getCategories();
  }

  addAdvertisement() {
    if (this.isAdvertisementValid()) {
      this.advertisementService.addAdvertisement(this.advertisement).subscribe(res => {
        this.isAdvertisementAdded = true;
      });
    } else {
      alert('Please fill all required fields');
    }
  }

  isAdvertisementValid(): boolean {
    if (!this.advertisement.Title
      || !this.advertisement.Description
      || !this.advertisement.Price) {
      return false;
    }

    return true;
  }
}
