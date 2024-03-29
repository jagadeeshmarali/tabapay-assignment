import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Node } from 'src/utils';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() tree: Node[] = [];
  @Output() nodeSelected = new EventEmitter<Node>();
  expandedStates: { [key: string]: boolean } = {};
  isModalOpen = false;
  selectedNodeName: string = '';
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
  openDialog(nodeName: string): void {
    this.selectedNodeName = nodeName;
    this.isModalOpen = true;
  }
  onNodeClick(node: Node, event: MouseEvent): void {
    event.stopPropagation();
    this.nodeSelected.emit(node);
  }
}
