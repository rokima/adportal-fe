import {Component, OnInit} from '@angular/core';
import {Advertisement} from '../../models/advertisement';
import {AdvertisementService} from '../../services/advertisement.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'adp-advertisement-details',
  templateUrl: './advertisement-details.component.html'
})

export class AdvertisementDetailsComponent implements OnInit {
  loaded = false;
  adId: string;
  advertisement: Advertisement;

  constructor(private advertisementService: AdvertisementService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.adId = this.activatedRoute.snapshot.paramMap.get('id');
    this.advertisementService.getAdvertisementById(this.adId).subscribe(res => {
      this.advertisement = res;
      this.loaded = true;
    });
  }
}
