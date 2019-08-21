import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politicians-list',
  templateUrl: './politicians-list.component.html',
  styles: []
})
export class PoliticiansListComponent implements OnInit {
  politicians = [
    {
      name: 'Nombre 1',
      id: 'id1'
    },
    {
      name: 'Nombre 2',
      id: 'id2'
    },
    {
      name: 'Nombre 3',
      id: 'id3'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
