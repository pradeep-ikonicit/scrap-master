import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.css']
})
export class AddAlertComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToAlerts() {
    this.router.navigate(['alerts']);
  }

}
