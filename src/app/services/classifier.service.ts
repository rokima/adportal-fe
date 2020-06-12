import {Injectable} from '@angular/core';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class ClassifierService {
  categories: Category[];

  setCategories(categories: Category[]) {
    this.categories = categories;
  }

  getCategories(): Category[] {
    return this.categories;
  }

}
