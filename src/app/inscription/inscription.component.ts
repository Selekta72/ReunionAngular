import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../collaborator';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  collaborator: Collaborator = {
    id: 1,
    lastname: 'Selecta',
    firstname: 'Le bg',
    date_naiss: '22-07-1997',
    role: 1,
    mail: 'a@a.fr',
    password: 'test'
  };

  constructor() { }

  ngOnInit() {
  }

  title = 'Inscription';
  
}
