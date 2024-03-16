import { Component } from '@angular/core';
import { data } from 'src/data/data';
import { jsonToNode, Node } from 'src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tabapay-assignment';
  tree: Node[] = data.map(jsonToNode);
  selectedItem: Node | null = null;

  constructor() { }
  displayNodeDetails(node: Node): void {
    this.selectedItem = node;
  }
}
