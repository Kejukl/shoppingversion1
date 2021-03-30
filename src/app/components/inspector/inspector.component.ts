import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements AfterViewInit {
  @Input() public selectedNode: go.Node;
  @Input() public parentmodel: go.Model;
  cat: any = {};
  totalArea = 0;
  iH = 0; // initial height
  iW = 0; // initial width
  iA = 0; //initial area of selected node
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
    this.sharePercent();
  }

  ngOnChanges() {
    if ( this.selectedNode != null ) {
      console.log( 'I am changing' )

      this.iH = this.selectedNode.data.h * 0.1;
      this.iW = this.selectedNode.data.w * 0.1;
    }
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
    this.sharePercent();
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

  sharePercent() {
    this.cat = {}
    this.totalArea = 0;
    if ( this.parentmodel ) {
      this.parentmodel.nodeDataArray.forEach( item => {
        if ( item.cat && this.cat[ item.cat] ) {
          this.cat[ item.cat] = item.h * item.w * 0.01 + this.cat[ item.cat];
          this.totalArea = this.totalArea + ( item.h * item.w * 0.01 );
        } else {
          if ( item.cat ) {
            this.cat[ item.cat ] = item.h * item.w * 0.01;
            this.totalArea = this.totalArea + ( item.h * item.w * 0.01 );
          }
        }
      });
   }
  }

}
