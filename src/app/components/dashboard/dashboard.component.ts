import { Component, OnInit } from '@angular/core';
import {ReunionService} from '../../services/reunion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  reunions: Array<any>;

  constructor(private reunionService: ReunionService) { }

  ngOnInit() {
    this.reunionService.getAllReunions().subscribe(response => {
      this.reunions = response;
      console.log(this.reunions);
    });
  }
}
