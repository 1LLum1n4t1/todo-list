import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../_services/items.service';
import { Item } from '../_models/item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  public items: Item[];
  public item: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
   this.showItems();
  }

  public showItems(): void {
    this.itemsService.getItems().subscribe(items => {
        this.items = items;
        console.log(this.items);
      });
  }

  public toggleItem(itemId): void {
    console.log(itemId);

    this.itemsService.toggleItem(itemId);
  }
}
