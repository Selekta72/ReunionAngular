import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../collaborator';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Inscription';
  
}
