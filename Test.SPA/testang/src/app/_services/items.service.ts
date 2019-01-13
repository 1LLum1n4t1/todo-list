import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../_models/item.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private _baseUrl = `${environment.apiUrl}/items/`;

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._baseUrl);
  }

  public getItem(itemId): Observable<Item> {
    return this.http.get<Item>(this._baseUrl + itemId);
  }

  public toggleItem(itemId): Observable<Item> {
    return this.http.put<Item>(this._baseUrl + 'toggle/' + itemId, {});
  }
}
