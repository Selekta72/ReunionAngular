import { Component, OnInit } from '@angular/core';
import {ReunionService} from '../../services/reunion.service';
import {TacheService} from '../../services/tache.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  reunions: Array<any>;
  taches: Array<any>;

  constructor(private reunionService: ReunionService, private tacheService: TacheService) { }

  ngOnInit() {
    this.reunionService.getAllReunions().subscribe(response => {
      this.reunions = response;
      console.log(this.reunions);
    });
    this.tacheService.getAllTaches().subscribe(response => {
      this.taches = response;
    });
  }
}
