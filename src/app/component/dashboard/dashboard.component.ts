import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.auth.logout();
  }
}
