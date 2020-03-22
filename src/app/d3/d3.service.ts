import { Injectable, EventEmitter } from '@angular/core';
import { Node, Link, ForceDirectedGraph } from './models';
import * as d3 from 'd3';

@Injectable()
export class D3Service {
   /** This service will provide methods to enable user interaction
    * with elements while maintaining the d3 simulations physics
    */
  constructor() { }

  /** A method to bind a pan and zoom behaviour to an svg element */
  /**
  applyZoomableBehaviour(svgElement, containerElement) {
    let svg, container, zoomed, zoom;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = () => {
      const transform = d3.event.transform;
      container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
    }

    //zoom = d3.zoom().on('zoom', zoomed);
    //svg.call(zoom);
  }
  **/
  
  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(element, node: Node, graph: ForceDirectedGraph) {
    const d3element = d3.select(element);
    console.log("applyDraggableBehaviour" + node);

    function started() {
      /** Preventing propagation of dragstart to parent elements */
      d3.event.sourceEvent.stopPropagation();

      if (!d3.event.active) {
      //graph.simulation.alphaTarget(0.3).restart();
        graph.simulation.alphaTarget(0).restart();
      }

      //d3.event.on('drag', dragged).on('end', ended);
      //d3.event.on('mousedown', pickNode);
      d3.event.on('click', pickNode);
      //d3.event.on('drag', pickNode);

      function pickNode() {
        console.log("clicked on "+node.id);
        if (!d3.event.active) {
          graph.simulation.alphaTarget(0);
        }

      }

      /***
      function dragged() {
        node.fixed = true; // no drag!
	//node.fx = d3.event.x;
	//node.fy = d3.event.y;
      }

      function ended() {
        if (!d3.event.active) {
          graph.simulation.alphaTarget(0);
        }

        node.fx = null;
        node.fy = null;
	}
	***/
    }

    //d3element.call(d3.drag()
    //  .on('start', started));
    //d3element.call(d3.click().on('click', pickNode));
    //d3element.call(d3.event().on('click', pickNode));
    //d3element.call(d3.event().on('click', started));
  }

  /** The interactable graph we will simulate in this article
  * This method does not interact with the document, 
  * purely physical calculations with d3
  */
  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height }) {
    const sg = new ForceDirectedGraph(nodes, links, options);
    return sg;
  }
}
