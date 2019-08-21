import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecisionViewComponent } from './decision-view/decision-view.component';
import { DecisionsListComponent } from './decisions-list/decisions-list.component';

@NgModule({
  declarations: [DecisionViewComponent, DecisionsListComponent],
  imports: [CommonModule],
  exports: [DecisionViewComponent, DecisionsListComponent]
})
export class DecisionsModule {}
