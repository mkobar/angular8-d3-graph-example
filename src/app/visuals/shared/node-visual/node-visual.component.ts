import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';

// box for text in SVG from:
//   https://stackoverflow.com/a/42783381

@Component({
  selector: '[nodeVisual]',
  //<text filter="url(#solid)" x="20" y="50" font-size="50"> solid background </text>
  template: `
  <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <defs>
          <filter x="0" y="0" width="1" height="1.1" id="solid">
              <feFlood flood-color="yellowgreen"/>
              <feComposite in="SourceGraphic" operator="xor"/>
          </filter>
      </defs>
      <svg:circle
          class="node"
          [attr.fill]="node.color"
          cx="0"
          cy="0"
          [attr.r]="node.r">
      </svg:circle>
      <svg:text
          class="node-name"
          filter="url(#solid)"
	  [attr.y]="node.tagy"
          [attr.font-size]="node.fontSize">
        {{node.name}}
      </svg:text>
      <svg:text
          class="node-name"
          fill="black"
	  [attr.y]="node.tagy"
          [attr.font-size]="node.fontSize">
        {{node.name}}
      </svg:text>
      <svg:image
          href="assets/images/flagged-24.png"
          [attr.x]="node.flagged2"
          [attr.y]="node.flagged2"
          [attr.height]="node.flagged"
          [attr.width]="node.flagged"/>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;

  pickNode() {
    console.log("clicked on "+ this.node.id);
  }
}
