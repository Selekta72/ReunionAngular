import { Component, OnInit } from '@angular/core';
import {CollaborateurService} from '../../services/collaborateur.service';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.scss']
})
export class CollaborateurComponent implements OnInit {

  collaborateurs: Array<any>;

  constructor(private collaborateurService: CollaborateurService) { }

  ngOnInit() {
    this.getCollaborateurs();
  }

  getCollaborateurs() {
    this.collaborateurService.getAllCollaborateurs().subscribe(response => {
      this.collaborateurs = response;
    });
  }

  deleteCollaborateur(collaborateurId: number) {
    this.collaborateurService.deleteCollaborateur(collaborateurId).subscribe(response => {
      this.getCollaborateurs();
    });
  }

}
