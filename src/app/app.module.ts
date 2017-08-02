import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
// Import your library
import { CollapsibleModule } from 'angular2-collapsible'; // <-- import the module
import { TraceErreurComponent } from './trace-erreur/trace-erreur.component';

@NgModule({
  declarations: [
    TraceErreurComponent
  ],
    bootstrap: [TraceErreurComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,  // <-- include required BrowserAnimationsModule
    CollapsibleModule // <-- include angular2-collapsible module
  ],
  providers: [],
})
export class AppModule { }
