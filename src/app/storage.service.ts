import { Injectable } from '@angular/core';
import { uniqBy, find } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  get (key: string): [] {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  getOneOf(key: string, matcher: { [key:string]: string }) {
    return find(JSON.parse(localStorage.getItem(key)) || [], matcher);
  }

  add (key: string, ...items) {
    items = items.map(item => {
      item.created = Date.now();
      return item;
    });
    const current = JSON.parse(localStorage.getItem(key));
    localStorage.setItem(key, JSON.stringify(uniqBy([...(current || []), ...items], 'deck_id')));
  }
  remove (key: string, id: string) {
    console.log(`remove ${id} from ${key}`);
  }
}
