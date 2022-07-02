import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() numberItems: number = 0;
  title = 'Ricardo Shopping Cart';
  constructor() { }

  ngOnInit(): void {
  }

}
