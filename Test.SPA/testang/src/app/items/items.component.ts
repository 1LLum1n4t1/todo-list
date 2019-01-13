import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../_services/items.service";
import { Item } from "../_models/item.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  public items: Item[];

  constructor(private itemsService: ItemsService) {}

  public ngOnInit() {
    this.showItems();
  }

  public async showItems() {
    await this.itemsService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);
    });
  }

  public toggleItem(itemId): void {
    this.itemsService.toggleItem(itemId).subscribe(() => {
      this.showItems();
    });
  }
}
