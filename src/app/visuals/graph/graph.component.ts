import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit } from '@angular/core';
import { D3Service, ForceDirectedGraph, Node } from '../../d3';

@Component({
  selector: 'graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes;
  @Input('links') links;
  graph: ForceDirectedGraph;
  //private _options: { width, height } = { width: 800, height: 600 };
  //_options: { width, height } = { width: 666, height: 150 };
  _options: { width, height } = { width: 400, height: 150 };
  // why options for functions (with inner) and _options for html?

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }


  constructor(
    private d3Service: D3Service,
    private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(
      this.nodes,
      this.links,
      this.options);

    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce
     *  checking only when relevant!
     * This improves scripting computation duration in a couple of tests
     *  I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are
     *  dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
  return this._options = {
    // why use inner?
      //width: window.innerWidth,
      //height: window.innerHeight
      width: 700,
      height: 250
    };
  }
}
