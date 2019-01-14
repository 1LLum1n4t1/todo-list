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
  public newItemValue: string;

  constructor(private itemsService: ItemsService) {}

  public ngOnInit() {
    this.showItems();
  }

  public showItems() {
    this.itemsService.getItems().subscribe(items => {
      this.items = items;
      this.items.reverse();
      console.log(items);
    });

  }

  public toggleItem(itemId): void {
    this.itemsService.toggleItem(itemId).subscribe(() => {
      this.showItems();
    });
  }

  public addNewItem(newItemName): void {
    this.itemsService.addItem(newItemName).subscribe(() => {
      this.showItems();
    });
  }

  public clearTextBox() {
    this.newItemValue = '';
  }

}
