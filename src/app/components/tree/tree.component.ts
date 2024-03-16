import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Node } from 'src/utils';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input()
  tree: Node[] = [];
  expandedStates: { [key: string]: boolean } = {};
  constructor() {
  }
  ngOnInit(): void {
  }
  toggleExpandState(nodeName: string): void {
    this.expandedStates[nodeName] = !this.expandedStates[nodeName];
  }

  isExpanded(nodeName: string): boolean {
    return !!this.expandedStates[nodeName];
  }
}
