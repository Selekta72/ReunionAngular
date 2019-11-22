import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../../models/collaborateur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  title = 'Connexion';
}
