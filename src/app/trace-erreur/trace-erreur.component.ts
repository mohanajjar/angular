import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';


export class Erreur {
//  idEo: number;
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

  public submitted = false;
  public erreur= Erreur;
  public data;

  ngOnInit() {
      this.erreur = {idEo: '125689', codeTypeErreur: '', codeTypeEo: '', idSequence: '', numeroContrat: '', sourceErreur: '', dateDebutErreur: '', dateFinErreur: '', nomFichier: '' };
  }
  constructor() {

  }
  submit(ef) {
    this.submitted = true;
    this.data = JSON.stringify(ef);
    console.log('Template-driven form submitted: ', ef.value);
    console.log(ef.valid);
  }
}
