import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Category} from '../models/category';
import {Advertisement} from '../models/advertisement';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {

  constructor(private http: HttpClient) {
  }

  getAdvertisementCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/Categories');
  }

  getAdvertisementById(adId): Observable<Advertisement> {
    return this.http.get<Advertisement>('/api/Advertisements/' + adId);
  }

  getAllAdvertisements(sort?) {
    sort = sort || 'newer';
    return this.http.get<Advertisement[]>('/api/Advertisements?sort=' + sort);
  }

  getAdvertisementsByCategory(categoryId) {
    return this.http.get<Advertisement[]>('/api/Advertisements/Category/' + categoryId);
  }

  addAdvertisement(advertisement: Advertisement) {
    return this.http.post('/api/Advertisements', advertisement);
  }
}
