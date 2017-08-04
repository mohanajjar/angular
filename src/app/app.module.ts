import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TraceErreurComponent} from './trace-erreur/trace-erreur.component';

@NgModule({
  declarations: [
    TraceErreurComponent
  ],
  bootstrap: [TraceErreurComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
})
export class AppModule {}
