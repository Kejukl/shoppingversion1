import { AfterViewInit, Component, OnInit } from '@angular/core';
const $ = go.GraphObject.make;
import * as go from 'gojs';

@Component({
  selector: 'app-pal',
  templateUrl: './pal.component.html',
  styleUrls: ['./pal.component.css']
})
export class PalComponent implements AfterViewInit {
  public palette: go.Palette;

  constructor() { }

  ngAfterViewInit() {
    this.palette = $(go.Palette, 'paletteDiv');
    this.palette.nodeTemplate =
    $(go.Node, 'Auto',
      $(go.Shape, new go.Binding( 'figure', 'fig' ),
        { width: 50, height: 50 },
        new go.Binding( 'fill', 'color')),
      $(go.TextBlock, { margin: 2, wrap: go.TextBlock.WrapFit, width: 50 },
        new go.Binding( 'text', 'key' ))
    );
    this.palette.model = $( go.Model );
    this.palette.model.addNodeDataCollection ([
      { key: 'groceries', color: 'green', fig: 'Rectangle' },
      { key: 'confectionary', color: 'pink', fig: 'Rectangle' },
      { key: 'dairy', color: 'rgb(255,248,220)', fig: 'Rectangle' },
      { key: 'freezer', color: 'rgb(135,206,250)', fig: 'Rectangle' },
      { key: 'general Merchandise', color: 'orange', fig: 'Rectangle' },
      { key: 'liquor', color: 'red', fig: 'Rectangle' },
      { key: 'produce', color: 'rgba(175, 231, 110, 1)', fig: 'Rectangle' },
      { key: 'meat', color: 'rgb(231,141,113)', fig: 'Rectangle' },
      { key: 'bakery', color: 'rgb(218,165,32)', fig: 'Rectangle' },
      { key: 'deli', color: 'rgb(173, 108, 29)', fig: 'Rectangle' },
      { key: 'sea food', color: 'rgb(176,196,222)', fig: 'Rectangle' },
      { key: 'pharmacy', color: 'rgb(29, 173, 149)', fig: 'Rectangle' },
      { key: 'grab and go', color: 'rgb(200, 237, 12)', fig: 'Rectangle' },
      { key: 'ATM', color: 'rgb(169, 160, 219)', fig: 'Rectangle' },
      { key: 'till', color: 'orange', fig: 'Rectangle' },
      { key: 'Help', color: 'orange', fig: 'Ellipse' },
      { key: 'Flower', color: 'yellow', fig: 'Rectangle' },
      { key: 'exit area', color: 'gold', fig: 'Rectangle' },
      { key: 'impulse', color: 'salmon', fig: 'Rectangle' }
    ]);
  }
}
