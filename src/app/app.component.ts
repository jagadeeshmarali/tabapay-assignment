import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { jsonToNode, Node } from 'src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tabapay-assignment';
  tree: Node[] = [];
  selectedItem: Node | null = null;

  constructor(private httpclient: HttpClient) {
    this.loadData();
  }
  loadData() {
    this.httpclient.get(`${environment.backend_url}/data`).subscribe((data: any) => {
      this.tree = data.map(jsonToNode)
    })
  }
  displayNodeDetails(node: Node): void {
    this.selectedItem = node;
  }
}
