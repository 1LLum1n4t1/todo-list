import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../_models/item.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl = 'http://localhost:5000/api/items/';

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }

  public getItem(itemId): Observable<any> {
    return this.http.get(this.baseUrl + itemId);
  }

  public toggleItem(itemId): void {
    this.http.put(this.baseUrl + 'toggle/' + itemId, {}).subscribe();
  }
}
