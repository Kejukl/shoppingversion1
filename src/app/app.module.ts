import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import { ModelComponent } from './components/model/model.component';
import { InspectorComponent } from './components/inspector/inspector.component';
import { PalComponent } from './components/pal/pal.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    ModelComponent,
    InspectorComponent,
    PalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
