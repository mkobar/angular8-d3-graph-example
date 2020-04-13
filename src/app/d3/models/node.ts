import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
// optional - defining optional implementation properties
// required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  fixed: boolean;
  name: string;
  id: string;
  linkCount: number = 0;
  r: number = 10;
  fontSize: string = '20px';
  //tagy: number;
  color: string = '#ccc';
  flagged: number = 0; // default flag image height and width
  flagged2: number = -10; // x & y


  constructor(id) {
    this.id = id;
  }

  // size for font and radius and color based on number of links
  normal = () => {
    return Math.sqrt(this.linkCount / APP_CONFIG.N);
  }

  /***
  get r() {
  //return 50 * this.normal() + 10;
    return 10;
  }

  get fontSize() {
  //return (30 * this.normal() + 10) + 'px';
    return '30px';
  }
  ***/

  get colorx() {
    //let index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
    //return APP_CONFIG.SPECTRUM[index];
    //return 'purple';
    //return '#6542a4';
    return '#ccc';
  }

  get tagy() {
    const tagnumber = this.r;
    return ((-tagnumber) -20);
  }
}
