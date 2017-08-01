import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/common';


export class Erreur {
  idEo: number;
  codeTypeErreur: string = "INCOHERENCE_AS400" ;
  codeTypeEo: string;
  idSequence: string = " 2202117 ";
  numeroContrat:string;
  sourceErreur:string="AS400";
  dateDebutErreur:string;
  dateFinErreur:string;
  nomFichier:string;
}

@Component({
  selector: 'app-trace-erreur',
  templateUrl: './trace-erreur.component.html',
  styleUrls: ['./trace-erreur.component.css']
})
export class TraceErreurComponent implements OnInit {
  erreur =Erreur;
  constructor() { }
  ngOnInit() {
  }

}
