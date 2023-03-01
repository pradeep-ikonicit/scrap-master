import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tracker',
  templateUrl: './add-tracker.component.html',
  styleUrls: ['./add-tracker.component.css']
})
export class AddTrackerComponent implements OnInit {

  constructor(private router:Router) { }
  products = [
    { id: 1, name: "Select" },
    { id: 2, name: "Package - The Basics" },
    { id: 3, name: "Package - Exam Prep" },
    { id: 4, name: "Package - Prep Plus" },
  ];


  ngOnInit(): void {
  }

  navigateToMyTrackers() {
    this.router.navigate(['tracker']);
  }

}
