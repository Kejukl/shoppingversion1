import { Component, OnInit } from '@angular/core';
const $=go.GraphObject.make
import * as go from 'gojs'

@Component({
  selector: 'app-pal',
  templateUrl: './pal.component.html',
  styleUrls: ['./pal.component.css']
})
export class PalComponent implements OnInit {
  public palette: go.Palette;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.palette=$(go.Palette, 'paletteDiv')
    this.palette.nodeTemplate =
    $(go.Node,"Auto",
      $(go.Shape,new go.Binding("figure", "fig"),
        { width: 50, height:50},
        new go.Binding("fill", "color")),
      $(go.TextBlock,{margin: 2,wrap: go.TextBlock.WrapFit,width: 50 },
        new go.Binding("text", "key"))
    );

    
    
//
    this.palette.model= $(go.Model)
    this.palette.model.addNodeDataCollection([{key:'veg',color:'green', fig: "Rectangle"},
    {key:'fruits',color:'yellow', fig: "Rectangle"},
    {key:'milk',color:'white', fig: "Rectangle"},
    {key:'meds',color:'blue', fig: "Rectangle"},
    {key:'infant',color:'pink', fig: "Rectangle"},
    {key:'coffee',color:'brown', fig: "Rectangle"},
    {key:'water',color:'aqua', fig: "Rectangle"},
    {key:'bakery',color:'orange', fig: "Rectangle"},
    {key:'kitchen',color:'purple', fig: "Rectangle"},
    {key:'till ',color:'orange', fig: "Ellipse"},
  {key:'snacks',color:'orange', fig: "Rectangle"}])
  }

}
