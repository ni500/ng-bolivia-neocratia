import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: []
})
export class SideMenuComponent implements OnInit {
  menuItems = [
    {
      name: 'Congreso',
      url: 'congreso',
      icon: 'profile'
    },
    {
      name: 'Decisiones',
      url: 'decisiones',
      icon: 'hot_to_vote'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
