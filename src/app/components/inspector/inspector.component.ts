import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements AfterViewInit {
  @Input() public selectedNode: go.Node;
  @Input() public parentmodel: go.Model;
  // scaling factor 10 for display.   1 smallest square is 1 meter;
  public data = {
    key: null,
    color: null,
    group: null,
    width: null,
    height: null,
    angle: null,
    cat: null
  };
  shopSize = '';
  constructor() { }



  ngAfterViewInit(): void {
    // console.log( this.parentmodel.nodeDataArray )
    // percentage calculation will be done here.
  }

  public onCommitForm() {
    // console.log(this.data.key,this.data.color)
    console.log( 'updating', this.selectedNode.data );
    this.parentmodel.startTransaction();
    if ( this.data.key != null ) {
      this.parentmodel.set(this.selectedNode.data, 'key', this.data.key);
    }
    if ( this.data.color != null ) {
      this.parentmodel.set(this.selectedNode.data, 'color', this.data.color);
    }
    if ( this.data.width != null ) {
      this.parentmodel.set( this.selectedNode.part, 'width', +this.data.width * 10 );

    }
    if ( this.data.height != null ) {
      this.parentmodel.set( this.selectedNode.part, 'height', +this.data.height * 10 );

    }
    if ( this.data.angle != null ) {
      this.parentmodel.set( this.selectedNode.part, 'angle', +this.data.angle) ;
    }
    if ( this.data.cat != null ) {
      this.parentmodel.set( this.selectedNode.data, 'cat', this.data.cat );
    }
    this.parentmodel.set( this.selectedNode.data, 'group', 'ShopFloor' );
    this.parentmodel.commitTransaction();
    this.selectedNode = null;
    this.data = {
      key: null,
      color: null,
      group: null,
      width: null,
      height: null,
      angle: null,
      cat: null
    };
  }

  onCommitForm2() {
    if (this.selectedNode.data.key === 'ShopFloor') {
      console.log( 'checking ShopFloor' );
      console.log( this.parentmodel.toJson() );
      this.parentmodel.startTransaction();
      this.parentmodel.set( this.selectedNode.data, 'size', this.shopSize );
      this.parentmodel.commitTransaction();
    }

  }

}
