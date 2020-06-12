import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from './services/advertisement.service';
import { ClassifierService } from './services/classifier.service';

@Component({
  selector: 'adp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'adportal-fe';
  appDataLoaded = false;

  constructor(private advertisementService: AdvertisementService,
              private classifierService: ClassifierService ) {

  }

  ngOnInit(): void {
    this.initAppData();
  }

  initAppData() {
    this.advertisementService.getAdvertisementCategories().subscribe(res => {
      this.classifierService.setCategories(res);
      this.appDataLoaded = true;
    });
  }
}
