import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DecisionsService } from '../decisions.service';

@Component({
  selector: 'app-change-vote',
  templateUrl: './change-vote.component.html',
  styles: []
})
export class ChangeVoteComponent implements OnInit {
  @Input() decisionId: string;
  @Input() politicianId: string;
  newVote: string;
  constructor(private decisionsService: DecisionsService) {}

  ngOnInit() {}

  setNewVote() {
    this.decisionsService
      .setVote(this.decisionId, this.politicianId, this.newVote)
      .then(() => {
        console.log('Done');
      })
      .catch(err => {
        console.log(err);
      });
  }
}
