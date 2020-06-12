import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {

  constructor(private http: HttpClient) {
  }

  getAdvertisementCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/Categories');
  }
}
