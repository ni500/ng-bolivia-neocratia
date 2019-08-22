import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-politician-view',
  templateUrl: './politician-view.component.html',
  styles: []
})
export class PoliticianViewComponent implements OnInit {
  politicianId: Observable<string>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.politicianId = this.route.paramMap.pipe(
      map(params => params.get('id') || 'Ningún político enocntrado')
    );
  }
}
