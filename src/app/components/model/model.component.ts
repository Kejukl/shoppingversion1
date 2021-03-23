import { Component, OnInit } from '@angular/core';
import { GojsAngularModule } from 'gojs-angular';
import * as go from 'gojs';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  public selectedNode=null;
  //parentdata:string=''
  public parentmodel: go.Model 
/*   = new go.GraphLinksModel(
    [ // a JavaScript Array of JavaScript objects, one per node;
      // the "color" property is added specifically for this app
      { key: "ShopFloor", color: "rgba(0,0,0,0)" ,loc: new go.Point(0, 0),size: "600 600",isGroup: true,resize:false, fig: "Rectangle"},
      { key: "Till", color: "orange",loc: new go.Point(50, 0) ,group: "ShopFloor",w:50,h:50,items: [ "Till"],angle: 0, fig: "Rectangle"},
      { key: "Flowers", color: "lightgreen",loc: new go.Point(50, 100) ,group: "ShopFloor",w:50,h:50,angle: 0, fig: "Rectangle"},
      { key: "Tobacco", color: "pink" ,loc: new go.Point(50, 150),group: "ShopFloor",w:50,h:50,angle: 0, fig: "Rectangle"}
    ]); */
  
  

  constructor() { }

  ngOnInit(): void {
    //this.parentdata='I am from parent'
    if (localStorage.getItem('savedModel')) {
      this.parentmodel = go.Model.fromJson(localStorage.getItem('savedModel'));
    } else {
      this.basicModel()
    }
  }
  public setSelectedNode(node){
    console.log('line 28: this is setSelectedNode in app.ts and got the event fired from diagram.ts')
    //nodeClicked has been declared in gojs-diagram.ts as an event emitter
    //(nodeClicked)=setSelectedNode($event) has been used in app.component.htlm
    //the node has been passed as the event into this function
    if(node&&node!=null){
      this.selectedNode=node;
      console.log('node data:::',node.data)
      console.log('node part:::',node.part)
      //selectedNode is an input for inspector component
    }
    if(!node){
      this.selectedNode=null;
      //setting null so that inspector component is not seen using ngIf
    }
  }
  public modelKey: string 
//    localStorage.setItem('riUser', JSON.stringify(data));

  saveInfo(){
    console.log(this.parentmodel.toJson() )
    this.modelKey=this.parentmodel.toJson()
    localStorage.setItem('savedModel', this.modelKey)
  }

  removeInfo(){
    localStorage.removeItem('savedModel')
    this.parentmodel = new go.GraphLinksModel([
      { key: "ShopFloor", color: "rgba(0,0,0,0)" ,loc: new go.Point(0, 0),size: "600 600",isGroup: true,resize:false, fig: "Rectangle"},
    ])
  }

  basicModel()
  {
    this.parentmodel = new go.GraphLinksModel(
      [
        { key: "ShopFloor", color: "rgba(0,0,0,0)" ,loc: new go.Point(0, 0),size: "600 600",isGroup: true,resize:false, fig: "Rectangle"},
        { key: "Flowers", color: "yellow",loc: new go.Point(50, 50) ,group: "ShopFloor",w:150,h:50,angle: 0, fig: "Rectangle"},
        { key: "Tobacco", color: "pink" ,loc: new go.Point(50, 150),group: "ShopFloor",w:150,h:50,angle: 0, fig: "Rectangle"},
        { key: "milk", color: "white" ,loc: new go.Point(50, 250),group: "ShopFloor",w:150,h:50,angle: 0, fig: "Rectangle"}
      ]);
  }  


}
