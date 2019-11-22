import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../../collaborator';
import {RoleService} from '../../services/role.service';
import {CollaborateurService} from '../../services/collaborateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  roles: Array<any>;
  collaborateur: Collaborator = new Collaborator();

  constructor(private roleService: RoleService, private collaborateurService: CollaborateurService) { }

  ngOnInit() {
    this.roleService.getAllRoles().subscribe(response => {
      this.roles = response;
    });
  }

  createCollaborateur() {
    this.collaborateurService.createCollaborateur(this.collaborateur).subscribe(response => {
      console.log(response);
    });
  }
}
