import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  content = `
    This is a text!
  `

  constructor(private router: Router) { }

  ngOnInit() {
  }

  start() {
    this.router.navigateByUrl('upload');
  }

}
