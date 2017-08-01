import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// Import your library
import { CollapsibleModule } from 'angular2-collapsible'; // <-- import the module

import {AppComponent} from './app.component';
import { ErreurTraceComponent } from './erreur-trace/erreur-trace.component';
import { TraceErreurComponent } from './trace-erreur/trace-erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    ErreurTraceComponent,
    TraceErreurComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // <-- include required BrowserAnimationsModule
    CollapsibleModule // <-- include angular2-collapsible module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
