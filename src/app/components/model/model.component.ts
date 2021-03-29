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
{"key":"ShopFloor","color":"rgba(0,0,0,0)","loc":"0 100","size":"1000 550","isGroup":true,"resize":false,"fig":"Rectangle"},
{"key":"ATM","color":"rgb(169, 160, 219)","fig":"Rectangle","loc":{"class":"go.Point","x":0,"y":550},"h":46,"w":51,"group":"ShopFloor","cat":"nonshopping"},
{"key":"Flower","color":"yellow","fig":"Rectangle","loc":{"class":"go.Point","x":0,"y":450},"h":49,"w":47,"group":"ShopFloor","cat":"flowers"},
{"key":"produce","color":"rgba(175, 231, 110, 1)","fig":"Rectangle","loc":{"class":"go.Point","x":0,"y":220},"h":174,"w":48,"group":"ShopFloor","cat":"produce"},
{"key":"bakery1","color":"rgb(218,165,32)","fig":"Rectangle","loc":{"class":"go.Point","x":0,"y":150},"h":100,"w":50,"group":"ShopFloor","cat":"bakery"},
{"key":"bakery2","color":"rgb(218,165,32)","fig":"Rectangle","loc":{"class":"go.Point","x":0,"y":100},"h":53,"w":100,"group":"ShopFloor","cat":"bakery"},
{"key":"dairy","color":"rgb(255,248,220)","fig":"Rectangle","loc":{"class":"go.Point","x":140,"y":100},"h":50,"w":349,"group":"ShopFloor","cat":"dairy"},
{"key":"meat","color":"rgb(231,141,113)","fig":"Rectangle","loc":{"class":"go.Point","x":540,"y":100},"h":49,"w":277,"group":"ShopFloor","cat":"nonveg"},
{"key":"sea food","color":"rgb(176,196,222)","fig":"Rectangle","loc":{"class":"go.Point","x":890,"y":100},"h":74,"w":49,"group":"ShopFloor","cat":"nonveg"},
{"key":"sea food2","color":"rgb(176,196,222)","fig":"Rectangle","loc":{"class":"go.Point","x":840,"y":100},"h":48,"w":50,"group":"ShopFloor","cat":"nonveg"},
{"key":"pharmacy","color":"rgb(29, 173, 149)","fig":"Rectangle","loc":{"class":"go.Point","x":940,"y":180},"h":39,"w":160,"group":"ShopFloor","angle":90,"cat":"pharma"},
{"key":"grab and go","color":"rgb(200, 237, 12)","fig":"Rectangle","loc":{"class":"go.Point","x":890,"y":350},"h":50,"w":52,"group":"ShopFloor","cat":"deli"},
{"key":"deli","color":"rgb(173, 108, 29)","fig":"Rectangle","loc":{"class":"go.Point","x":890,"y":450},"h":145,"w":50,"group":"ShopFloor","cat":"deli"},
{"key":"G1","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":90,"y":200},"h":200,"w":50,"group":"ShopFloor","angle":0,"cat":"general"},
{"key":"G2","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":190,"y":200},"h":200,"w":50,"angle":0,"group":"ShopFloor","cat":"general"},
{"key":"G3","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":290,"y":200},"h":200,"w":50,"angle":0,"group":"ShopFloor","cat":"general"},

{"key":"G4","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":390,"y":200},"h":200,"w":50,"angle":0,"group":"ShopFloor","cat":"general"},
{"key":"G5","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":490,"y":200},"h":200,"w":50,"angle":0,"group":"ShopFloor","cat":"general"},
{"key":"G6","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":590,"y":200},"h":200,"w":49,"angle":0,"group":"ShopFloor","cat":"general"},
{"key":"G7","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":690,"y":200},"h":150,"w":101,"angle":0,"group":"ShopFloor","cat":"general"},
{"key":"help","color":"orange","fig":"Ellipse","loc":{"class":"go.Point","x":710,"y":380},"h":36.46196516170058,"w":62,"group":"ShopFloor","cat":"nonshopping"},
{"key":"till1","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":140,"y":500},"h":100,"w":50,"group":"ShopFloor","cat":"nonshopping"},
{"key":"till2","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":240,"y":500},"h":100,"w":50,"group":"ShopFloor","cat":"nonshopping"},
{"key":"till3","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":340,"y":500},"h":100,"w":50,"group":"ShopFloor","cat":"nonshopping"},
{"key":"till4","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":440,"y":500},"h":100,"w":50,"group":"ShopFloor","cat":"nonshopping"},
{"key":"till5","color":"orange","fig":"Rectangle","loc":{"class":"go.Point","x":540,"y":500},"h":100,"w":50,"group":"ShopFloor","cat":"nonshopping"},
{"key":"impulse3","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":290,"y":400},"h":50,"w":50,"group":"ShopFloor","cat":"unkown"},
{"key":"impulse2","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":190,"y":400},"h":50,"w":50,"group":"ShopFloor","cat":"unkonwn"},
{"key":"impulse4","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":390,"y":400},"h":50,"w":50,"group":"ShopFloor","cat":"unknown"},
{"key":"impulse5","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":490,"y":400},"h":50,"w":50,"group":"ShopFloor","cat":"unknown"},
{"key":"impulse1","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":90,"y":400},"h":50,"w":50,"group":"ShopFloor","cat":"unknown"},
{"key":"impulse6","color":"salmon","fig":"Rectangle","loc":{"class":"go.Point","x":590,"y":400},"h":50,"w":50,"group":"ShopFloor","cat":"unknown"},
{"key":"exit1","color":"gold","fig":"Rectangle","loc":{"class":"go.Point","x":0,"y":630},"h":18,"w":150,"group":"ShopFloor","cat":"nonshopping"},
{"key":"entrance","color":"gold","fig":"Rectangle","loc":{"class":"go.Point","x":697,"y":630},"h":18,"w":150,"group":"ShopFloor","cat":"nonshopping"}


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
