import {Component, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


export class Erreur {
  idEo: number;
  codeTypeErreur: string;
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
  erreur: any;
  constructor() {
    console.log("Form Component Start");
  }
  submitted = false; //form not submited : default
  data: string; //this variable contains our data  //Show data after form submit and set submitted to true
  loadErreurs(data) {
    this.submitted = true;
    this.data = JSON.stringify(data, null, 2);
    console.log(this.data);
  }
  ngOnInit() {
    this.erreur = {idEo: "none", codeTypeErreur: "", codeTypeEo: "", idSequence: "12", numeroContrat: "", sourceErreur: "", dateDebutErreur: "", dateFinErreur: "", nomFichier: ""} as any;
    console.log('From init method');
  }

}
