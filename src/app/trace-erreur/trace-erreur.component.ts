import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


export class Erreur {
  idEo: number;
  codeTypeErreur: string ;
  codeTypeEo: string;
  idSequence: string;
  numeroContrat: string;
  sourceErreur: string;
  dateDebutErreur: string;
  dateFinErreur: string;
  nomFichier: string;
}

@Component({
  selector: 'app-trace-erreur',
  templateUrl: './trace-erreur.component.html',
  styleUrls: ['./trace-erreur.component.css']
})
export class TraceErreurComponent implements OnInit {
  public erreur = new Erreur();
  constructor() {
   console.log("Form Component Start");
   }
    submitted = false; //form not submited : default
    data: string; //this variable contains our data
    //Show data after form submit and set submitted to true
    onSubmit(data) {
        this.submitted = true;
        this.data = JSON.stringify(data, null, 2);
        console.log(this.data);
    }
  ngOnInit() {
    console.log('From init method');
  }
}
