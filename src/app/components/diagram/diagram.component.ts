import { Output } from '@angular/core';
import { Component, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';
import * as go from 'gojs';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements AfterViewInit, OnChanges {
  public diagram: go.Diagram;
  // binded with parentmodel
  @Input() parentmodel: go.GraphLinksModel;
  @Output()
  public nodeClicked = new EventEmitter();
  nullNode: go.Node;

  constructor() { }

/*   ngOnInit() {
  } */

  ngAfterViewInit(): void {
    this.diagram = $( go.Diagram, 'myDiagramDiv');
    console.log( 'line 28, this.parentmodel', this.parentmodel );
    this.diagram.grid.visible = true;
    this.diagram.undoManager.isEnabled = true;
    this.diagram.grid.gridCellSize = new go.Size( 10, 10 );
    this.diagram.toolManager.draggingTool.isGridSnapEnabled = true;

    this.diagram.groupTemplate =
    $(go.Group, 'Vertical',
      { selectionObjectName: 'PH',
        locationObjectName: 'PH',
        resizable: true,
        },
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.TextBlock,  // group title
        { font: 'Bold 20 pt Sans-Serif' },
        new go.Binding('text', 'key')),
      $(go.Shape,  // using a Shape instead of a Placeholder
        { name: 'PH',
          fill: 'rgba(128,128,128,0.33)' },
        new go.Binding('desiredSize', 'size', go.Size.parse).makeTwoWay(go.Size.stringify))
    );

    this.diagram.nodeTemplate =
    $(go.Node,
      'Auto', // the Shape automatically fits around the TextBlock
    { resizable: true, resizeObjectName: 'SHAPE1' },
    // new go.Binding("resizable","resize"),
    { name: 'SHAPE1' },
    new go.Binding( 'height', 'h' ).makeTwoWay(),
    new go.Binding( 'width', 'w' ).makeTwoWay(),
    new go.Binding( 'cat', 'cat' ).makeTwoWay(),
    { rotatable : true, rotateObjectName: 'SHAPE1' },
    new go.Binding( 'location', 'loc' ).makeTwoWay(),
    new go.Binding( 'angle', 'angle' ).makeTwoWay(),
    $( go.Shape, new go.Binding( 'figure', 'fig' ),
    { name: 'SHAPE' }, new go.Binding( 'fill', 'color' ), { strokeWidth: 1, stroke: go.Brush.darken( 'transparent' )}),
    $( go.TextBlock,
      { alignment: go.Spot.TopCenter, alignmentFocus: go.Spot.TopCenter },
    new go.Binding( 'text', 'key' ), new go.Binding( 'text', 'key' ), { stroke: 'darkslateblue' }),
    );
    this.diagram.model = this.parentmodel;
    this.diagram.allowDrop = true;
    //
    this.diagram.addDiagramListener( 'ObjectSingleClicked', (e) => {
      this.diagram.clearSelection();
      this.nodeClicked.emit( this.nullNode );
      console.log( 'Add diagram listener invoked to emit the null node' );
    });
    this.diagram.addDiagramListener( 'ObjectDoubleClicked', (e) => {
      console.log( 'Add diagram listener invoked to emit the node' );
      const node = this.diagram.selection.first();
      if ( node && node != null ) {
        console.log( 'emitting node');
        this.nodeClicked.emit(node);
        console.log( 'node being clicked' );
        console.log( 'node.data.key', node.data.key );
        console.log( 'node.data.color', node.data.color );
        console.log( 'node.data.loc', node.data.loc );
        console.log( 'node.data.h', node.data.h );
        console.log( 'node.data.w', node.data.h );
        console.log( 'node.part.location', node.part.location );
        console.log( 'node.part.width', node.part.width );
        console.log( 'node.part.height', node.part.height );
        console.log( 'node.part.angle', node.part.angle );
        console.log( 'node.data.h', node.data.h );
        console.log( 'node.part', node.part );
      }

    });

    this.diagram.addDiagramListener('SelectionMoved', (e) => {
      console.log('Add diagram listener invoked to emit the node');
      const node = this.diagram.selection.first();
      if ( node && node != null ) {
        this.nodeClicked.emit(node);
        console.log('node being clicked 2');
        console.log(node.data.key);
        console.log(node.data.color);
        console.log(node.data.loc);
        console.log(node.part.location);
        console.log(node.part.width);
      }
    });

    this.diagram.addDiagramListener('ExternalObjectsDropped', (e) => {
      console.log('Add diagram ext');
      const node = this.diagram.selection.first();
      // node.part.width=50 this statement set the outer panel size.  you can set like node.data.h+12
      // node.part.height=50
      node.data.h = 100;
      node.data.w = 50;
      console.log( node.containingGroup );
      console.log( node.data );
      console.log( this.diagram.model.nodeDataArray );
      this.parentmodel.startTransaction();
      this.parentmodel.set(node.data, 'group', 'ShopFloor');
      this.parentmodel.commitTransaction();
      this.nodeClicked.emit(node);
    });

    this.diagram.addDiagramListener('SelectionCopied', (e) => {
      console.log('Add diagram copy', e);
      const node = this.diagram.selection.first();
      // node.part.width=50 this statement set the outer panel size.  you can set like node.data.h+12
      // node.part.height=50
      node.data.h = 100;
      node.data.w = 50;
      console.log(node.containingGroup);
      console.log(node.data);
      console.log(this.diagram.model.nodeDataArray);
      this.parentmodel.startTransaction();
      this.parentmodel.set( node.data, 'group', 'ShopFloor' );
      this.parentmodel.commitTransaction();
      this.nodeClicked.emit( node );
  });

    this.diagram.addDiagramListener('SelectionDeleted', (e) => {
      console.log('Deletion');
      this.nodeClicked.emit(this.nullNode);
    });

  }

  readInfo() {
    if (localStorage.getItem( 'savedModel' )) {
      this.diagram.model = go.Model.fromJson(localStorage.getItem( 'savedModel' ));
    }
  }

  ngOnChanges() {
    if ( this.diagram ) {
      this.diagram.model = this.parentmodel;
    }

  }

}

