export class Node {
  name: string;
  children: Node[];
  constructor(name: string, children: Node[]) {
    this.name = name;
    this.children = children;
  }
}

export function jsonToNode(jsonData: any): Node {
  if (jsonData.children) {
    return new Node(jsonData.name, jsonData.children.map(jsonToNode));
  } else {
    return new Node(jsonData.name, []);
  }
}