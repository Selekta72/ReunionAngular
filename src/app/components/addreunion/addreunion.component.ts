import { Component, OnInit } from '@angular/core';
import {CollaborateurService} from '../../services/collaborateur.service';
import {Reunions} from '../../models/reunions';
import {ReunionService} from '../../services/reunion.service';

@Component({
  selector: 'app-addreunion',
  templateUrl: './addreunion.component.html',
  styleUrls: ['./addreunion.component.scss']
})
export class AddreunionComponent implements OnInit {

  reunion: Reunions = new Reunions();
  collaborateurs: Array<any>;

  constructor(private collaborateurService: CollaborateurService, private reunionService: ReunionService) { }

  ngOnInit() {
    this.collaborateurService.getAllCollaborateurs().subscribe(response => {
      this.collaborateurs = response;
      console.log(this.collaborateurs);
    });
  }

  createReunion() {
      this.reunionService.createReunion(this.reunion).subscribe(response => {
        console.log(response);
      });
  }

}
