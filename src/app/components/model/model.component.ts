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

  Jcheck={ "class": "GraphLinksModel",
  "nodeDataArray": [
{"key":"ShopFloor","color":"rgba(0,0,0,0)","loc":"-60 150","size":"1000 500","isGroup":true,"resize":false,"fig":"Rectangle"},
{"key":"ATM","color":"rgb(169, 160, 219)","fig":"Rectangle","loc":{"class":"go.Point","x":-60,"y":604},"h":46,"w":51,"group":"ShopFloor"},
{"key":"Flower","color":"yellow","fig":"Rectangle","loc":{"class":"go.Point","x":-60,"y":501},"h":49,"w":47,"group":"ShopFloor"},
{"key":"produce","color":"rgba(175, 231, 110, 1)","fig":"Rectangle","loc":{"class":"go.Point","x":-60,"y":270},"h":174,"w":48,"group":"ShopFloor"},
{"key":"bakery1","color":"rgb(218,165,32)","fig":"Rectangle","loc":{"class":"go.Point","x":-60,"y":150},"h":100,"w":50,"group":"ShopFloor"},
{"key":"bakery2","color":"rgb(218,165,32)","fig":"Rectangle","loc":{"class":"go.Point","x":-10,"y":150},"h":53,"w":100,"group":"ShopFloor"},
{"key":"dairy","color":"rgb(255,248,220)","fig":"Rectangle","loc":{"class":"go.Point","x":140,"y":150},"h":50,"w":349,"group":"ShopFloor"},
{"key":"meat","color":"rgb(231,141,113)","fig":"Rectangle","loc":{"class":"go.Point","x":540,"y":150},"h":49,"w":277,"group":"ShopFloor"},
{"key":"sea food","color":"rgb(176,196,222)","fig":"Rectangle","loc":{"class":"go.Point","x":890,"y":150},"h":74,"w":49,"group":"ShopFloor"},
{"key":"sea food2","color":"rgb(176,196,222)","fig":"Rectangle","loc":{"class":"go.Point","x":840,"y":150},"h":48,"w":50,"group":"ShopFloor"},
{"key":"pharmacy","color":"rgb(29, 173, 149)","fig":"Rectangle","loc":{"class":"go.Point","x":940,"y":230},"h":39,"w":160,"group":"ShopFloor","angle":90},
{"key":"grab and go","color":"rgb(200, 237, 12)","fig":"Rectangle","loc":{"class":"go.Point","x":890,"y":400},"h":50,"w":52,"group":"ShopFloor"},
{"key":"deli","color":"rgb(173, 108, 29)","fig":"Rectangle","loc":{"class":"go.Point","x":890,"y":505},"h":145,"w":50,"group":"ShopFloor"},
{"key":"G1","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":90,"y":250},"h":197,"w":50,"group":"ShopFloor","angle":0},
{"key":"impulse","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":600,"y":324.07783203125},"h":1,"w":45.79541015625,"group":"ShopFloor"},
{"key":"G12","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":190,"y":250},"h":198,"w":50,"angle":0,"group":"ShopFloor"},
{"key":"G122","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":290,"y":250},"h":200,"w":50,"angle":0,"group":"ShopFloor"},
{"key":"G123","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":390,"y":250},"h":197,"w":50,"angle":0,"group":"ShopFloor"},
{"key":"G124","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":490,"y":250},"h":198,"w":50,"angle":0,"group":"ShopFloor"},
{"key":"G125","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":590,"y":250},"h":202,"w":49,"angle":0,"group":"ShopFloor"},
{"key":"G126","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":690,"y":250},"h":151,"w":101,"angle":0,"group":"ShopFloor"},
{"key":"Help","color":"orange","fig":"Ellipse","loc":{"class":"go.Point","x":710,"y":430},"h":36.46196516170058,"w":62,"group":"ShopFloor"},
{"key":"till","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":140,"y":550},"h":100,"w":50,"group":"ShopFloor"},
{"key":"till2","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":240,"y":550},"h":100,"w":50,"group":"ShopFloor"},
{"key":"till3","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":340,"y":550},"h":100,"w":50,"group":"ShopFloor"},
{"key":"till4","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":440,"y":550},"h":100,"w":50,"group":"ShopFloor"},
{"key":"till5","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":540,"y":550},"h":100,"w":50,"group":"ShopFloor"},
{"key":"impulse3","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":290,"y":450},"h":50,"w":53.025390625,"group":"ShopFloor"},
{"key":"impulse2","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":190,"y":450},"h":50,"w":50,"group":"ShopFloor"},
{"key":"impulse4","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":390,"y":450},"h":50,"w":50,"group":"ShopFloor"},
{"key":"impulse5","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":490,"y":450},"h":50,"w":50,"group":"ShopFloor"},
{"key":"impulse1","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":90,"y":450},"h":50,"w":50,"group":"ShopFloor"},
{"key":"impulse6","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":590,"y":450},"h":50,"w":50,"group":"ShopFloor"}
],
  "linkDataArray": []}

  basicModel()
  {
/*     this.parentmodel = new go.GraphLinksModel([
        { key: "ShopFloor", color: "rgba(0,0,0,0)" ,loc: new go.Point(0, 0),size: "1000 500",isGroup: true,resize:false, fig: "Rectangle"},

      ]); */
    this.parentmodel = go.GraphLinksModel.fromJson(this.Jcheck)
  }  


}
