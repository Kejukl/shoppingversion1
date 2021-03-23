import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements OnInit {
  @Input() public selectedNode:go.Node;
  @Input() public parentmodel:go.Model;

  public data = {
    key: null,
    color: null,
    group:null,
    width:null,
    height:null,
    angle:null,
    items:null
  };
  shopSize:string = ''
  constructor() { }

  ngOnInit(): void {
    
  }

  public onCommitForm() {
    //console.log(this.data.key,this.data.color)
    console.log('updating',this.selectedNode.data)
    this.parentmodel.startTransaction();
    if(this.data.key!=null){
      this.parentmodel.set(this.selectedNode.data, 'key', this.data.key);
    }
    if(this.data.color!=null){
      this.parentmodel.set(this.selectedNode.data, 'color', this.data.color);
    }
    if(this.data.width!=null){
      console.log(this.data.width)
      this.parentmodel.set(this.selectedNode.part, 'width', +this.data.width);
    }
    if(this.data.height!=null){
      console.log(this.data.height)
      this.parentmodel.set(this.selectedNode.part, 'height', +this.data.height);
    }
    if(this.data.angle!=null){
      console.log(this.data.angle)
      this.parentmodel.set(this.selectedNode.part, 'angle', +this.data.angle);
    }

    //this.model.set(this.selectedNode.data, 'key', this.data.key);
    //this.model.set(this.selectedNode.data, 'color', this.data.color);
    //this.model.set(this.selectedNode.part, 'width', 100);

    this.parentmodel.commitTransaction();
    this.selectedNode=null;
    this.data = {
      key: null,
      color: null,
      group:null,
      width:null,
      height:null,
      angle:null,
      items:null
    };
  }

  onCommitForm2(){
    if (this.selectedNode.data.key=='ShopFloor') {
      console.log('checking ShopFloor')
      console.log(this.parentmodel.toJson() )
      this.parentmodel.startTransaction();
      this.parentmodel.set(this.selectedNode.data, 'size', this.shopSize);
      this.parentmodel.commitTransaction();


    }
    
  }



}
