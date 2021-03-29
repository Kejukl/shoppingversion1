import { Component, OnInit } from '@angular/core';
import { GojsAngularModule } from 'gojs-angular';
import * as go from 'gojs';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  public selectedNode = null;
  public parentmodel: go.Model;
  public modelKey: string;


  constructor() { }

  ngOnInit(): void {
    // this.parentdata='I am from parent'
    if (localStorage.getItem('savedModel')) {
      this.parentmodel = go.Model.fromJson(localStorage.getItem('savedModel'));
    } else {
      this.basicModel();
    }
  }
  public setSelectedNode(node) {
    console.log('line 28: this is setSelectedNode in app.ts and got the event fired from diagram.ts');
    // nodeClicked has been declared in gojs-diagram.ts as an event emitter
    // (nodeClicked)=setSelectedNode($event) has been used in app.component.htlm
    // the node has been passed as the event into this function
    if ( node && node != null ) {
      this.selectedNode = node;
      console.log('node data:::', node.data);
      console.log('node part:::', node.part);
      // selectedNode is an input for inspector component
    }
    if (!node) {
      this.selectedNode = null;
      // setting null so that inspector component is not seen using ngIf
    }
  }
// localStorage.setItem('riUser', JSON.stringify(data));

  saveInfo() {
    console.log( this.parentmodel.toJson() );
    this.modelKey = this.parentmodel.toJson();
    localStorage.setItem( 'savedModel', this.modelKey );
  }

  removeInfo() {
    localStorage.removeItem( 'savedModel' );
    this.parentmodel = new go.GraphLinksModel([
      { key: 'ShopFloor', color: 'rgba(0,0,0,0)' , loc: new go.Point(0, 0), size: '600 600',
      isGroup: true, resize: false, fig: 'Rectangle' },
    ]);
  }

  basicModel() {
    // this.parentmodel = go.GraphLinksModel.fromJson(this.baseModel);
    this.parentmodel = new go.GraphLinksModel([
      { key: 'ShopFloor', color: 'rgba(0,0,0,0)', loc: new go.Point(0, 100), size : '1000 550',
      isGroup : true, resize : false, fig: 'Rectangle' },
      { key: 'ATM', color: 'rgb(169, 160, 219)', fig: 'Rectangle', loc: new go.Point(0, 450), h: 46, w: 51,
      group: 'ShopFloor', cat: 'nonshopping' },
      { key: 'Flower', color: 'yellow', fig: 'Rectangle', loc: new go.Point(0, 350), h: 49, w: 47, group: 'ShopFloor', cat: 'flowers' },
      { key: 'produce', color: 'rgba(175, 231, 110, 1)', fig: 'Rectangle', loc: new go.Point(0, 120), h: 174, w: 48,
      group: 'ShopFloor', cat: 'produce' },
      { key: 'bakery1', color: 'rgb(218,165,32)', fig: 'Rectangle', loc: new go.Point(0, 50), h: 100, w: 50,
      group: 'ShopFloor', cat: 'bakery' },
      { key: 'bakery2', color: 'rgb(218,165,32)', fig: 'Rectangle', loc: new go.Point(0, 0), h: 53, w: 100,
      group: 'ShopFloor', cat: 'bakery' },
      { key: 'dairy', color: 'rgb(255,248,220)', fig: 'Rectangle', loc: new go.Point(140, 0), h: 50, w: 349,
      group: 'ShopFloor', cat: 'dairy' },
      { key: 'meat', color: 'rgb(231,141,113)', fig: 'Rectangle', loc: new go.Point(540, 0), h: 49, w: 277,
      group: 'ShopFloor', cat: 'nonveg' },
      { key: 'seafood1', color: 'rgb(176,196,222)', fig: 'Rectangle', loc: new go.Point(950, 50), h: 50, w: 50,
      group: 'ShopFloor', cat: 'nonveg' },
      { key: 'seafood2', color: 'rgb(176,196,222)', fig: 'Rectangle', loc: new go.Point(850, 0), h: 50, w: 150,
      group: 'ShopFloor', cat: 'nonveg' },
      { key: 'pharma', color: 'rgb(29, 173, 149)', fig: 'Rectangle', loc: new go.Point(1000, 150), h: 39, w: 160,
      group: 'ShopFloor', cat: 'pharma', angle: 90 },
      { key: 'grab and go', color: 'rgb(200, 237, 12)', fig: 'Rectangle', loc: new go.Point(950, 350), h: 50, w: 52,
      group: 'ShopFloor', cat: 'deli', angle: 0 },
      { key: 'deli', color: 'rgb(173, 108, 29)', fig: 'Rectangle', loc: new go.Point(950, 400), h: 100, w: 50,
      group: 'ShopFloor', cat: 'deli', angle: 0 },
      { key: 'G1', color: 'orange', fig: 'Rectangle', loc: new go.Point(100, 100), h: 200, w: 50,
      group: 'ShopFloor', cat: 'general' , angle: 0 },
      { key: 'G2', color: 'orange', fig: 'Rectangle', loc: new go.Point(200, 100), h: 200, w: 50,
      group: 'ShopFloor', cat: 'general' , angle: 0 },
      { key: 'G3', color: 'orange', fig: 'Rectangle', loc: new go.Point(300, 100), h: 200, w: 50,
      group: 'ShopFloor', cat: 'general' , angle: 0 },
      { key: 'G4', color: 'orange', fig: 'Rectangle', loc: new go.Point(400, 100), h: 200, w: 50,
      group: 'ShopFloor', cat: 'general' , angle: 0 },
      { key: 'G5', color: 'orange', fig: 'Rectangle', loc: new go.Point(500, 100), h: 200, w: 50,
      group: 'ShopFloor', cat: 'general' , angle: 0 },
      { key: 'G6', color: 'orange', fig: 'Rectangle', loc: new go.Point(600, 100), h: 200, w: 50,
      group: 'ShopFloor', cat: 'general' , angle: 0 },
      { key: 'G7', color: 'orange', fig: 'Rectangle', loc: new go.Point(700, 100), h: 100, w: 50,
      group: 'ShopFloor', cat: 'general' , angle: 0 },
      { key: 'help', color: 'orange', fig: 'Ellipse', loc: new go.Point(700, 300), h: 45, w: 60,
      group: 'ShopFloor', cat: 'nonshopping' , angle: 0 },
      { key: 'till1', color: 'orange', fig: 'Rectangle', loc: new go.Point(150, 400), h: 100, w: 50, group: 'ShopFloor',
      cat: 'nonshopping' , angle: 0 },
      { key: 'till2', color: 'orange', fig: 'Rectangle', loc: new go.Point(250, 400), h: 100, w: 50, group: 'ShopFloor',
      cat: 'nonshopping' , angle: 0 },
      { key: 'till3', color: 'orange', fig: 'Rectangle', loc: new go.Point(350, 400), h: 100, w: 50, group: 'ShopFloor',
      cat: 'nonshopping' , angle: 0 },
      { key: 'till4', color: 'orange', fig: 'Rectangle', loc: new go.Point(450, 400), h: 100, w: 50, group: 'ShopFloor',
      cat: 'nonshopping' , angle: 0 },
      { key: 'till5', color: 'orange', fig: 'Rectangle', loc: new go.Point(550, 400), h: 100, w: 50, group: 'ShopFloor',
      cat: 'nonshopping' , angle: 0 },
      { key: 'till6', color: 'orange', fig: 'Rectangle', loc: new go.Point(650, 400), h: 100, w: 50, group: 'ShopFloor',
      cat: 'nonshopping' , angle: 0 },
      { key: 'impulse1', color: 'salmon', fig: 'Rectangle', loc: new go.Point(100, 300), h: 30, w: 50, group: 'ShopFloor',
      cat: 'undecided' , angle: 0 },
      { key: 'impulse2', color: 'salmon', fig: 'Rectangle', loc: new go.Point(200, 300), h: 30, w: 50, group: 'ShopFloor',
      cat: 'undecided' , angle: 0 },
      { key: 'impulse3', color: 'salmon', fig: 'Rectangle', loc: new go.Point(300, 300), h: 30, w: 50, group: 'ShopFloor',
      cat: 'undecided' , angle: 0 },
      { key: 'impulse4', color: 'salmon', fig: 'Rectangle', loc: new go.Point(400, 300), h: 30, w: 50, group: 'ShopFloor',
      cat: 'undecided' , angle: 0 },
      { key: 'impulse5', color: 'salmon', fig: 'Rectangle', loc: new go.Point(500, 300), h: 30, w: 50, group: 'ShopFloor',
      cat: 'undecided' , angle: 0 },
      { key: 'impulse6', color: 'salmon', fig: 'Rectangle', loc: new go.Point(600, 300), h: 30, w: 50, group: 'ShopFloor',
      cat: 'undecided' , angle: 0 },
      { key: 'impulse7', color: 'salmon', fig: 'Rectangle', loc: new go.Point(700, 200), h: 30, w: 50, group: 'ShopFloor',
      cat: 'undecided' , angle: 0 },
      { key: 'exit1', color: 'gold', fig: 'Rectangle', loc: new go.Point(0, 530), h: 20, w: 150, group: 'ShopFloor',
      cat: 'nonshopping' , angle: 0 },
      { key: 'entrance', color: 'gold', fig: 'Rectangle', loc: new go.Point(750, 530), h: 20, w: 150,
      group: 'ShopFloor', cat: 'nonshopping' , angle: 0 },

    ]);
  }
}
