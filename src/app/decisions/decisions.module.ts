import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecisionViewComponent } from './decision-view/decision-view.component';
import { DecisionsListComponent } from './decisions-list/decisions-list.component';
import { AddDecisionComponent } from './add-decision/add-decision.component';
import { SharedModule } from '../shared/shared.module';
import { ChangeVoteComponent } from './change-vote/change-vote.component';

@NgModule({
  declarations: [
    DecisionViewComponent,
    DecisionsListComponent,
    AddDecisionComponent,
    ChangeVoteComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [DecisionViewComponent, DecisionsListComponent, ChangeVoteComponent]
})
export class DecisionsModule {}
