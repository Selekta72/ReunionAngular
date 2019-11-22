import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../services/role.service';
import {Roles} from '../../models/roles';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  roles: Array<any>;
  // role: Roles = new Roles();

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.roleService.getAllRoles().subscribe(response => {
      this.roles = response;
    });
  }

  deleteRole() {
    this.roleService
  }

}
