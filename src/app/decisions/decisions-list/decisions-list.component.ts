import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DecisionsService } from '../decisions.service';

@Component({
  selector: 'app-decisions-list',
  templateUrl: './decisions-list.component.html',
  styles: []
})
export class DecisionsListComponent implements OnInit {
  decisions$: Observable<[]>;
  constructor(private decisionsService: DecisionsService) {}

  ngOnInit() {
    this.decisionsService.getAllDecisions().subscribe((decisions: any) => {
      this.decisions$ = decisions;
    });
  }
}
