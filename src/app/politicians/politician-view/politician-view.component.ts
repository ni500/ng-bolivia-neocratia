import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { PoliticiansService } from '../politicians.service';
import { DecisionsService } from 'src/app/decisions/decisions.service';

@Component({
  selector: 'app-politician-view',
  templateUrl: './politician-view.component.html',
  styles: []
})
export class PoliticianViewComponent implements OnInit, OnDestroy {
  politicianId$: Observable<string>;
  politicianId: string;
  politician: any;
  decisions$: Observable<any>;
  politicianVotes: [];
  subs = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private politiciansService: PoliticiansService,
    private decisionsService: DecisionsService
  ) {}

  ngOnInit() {
    this.politicianId$ = this.route.paramMap.pipe(
      map(params => params.get('id') || 'Ningún político enocntrado')
    );
    this.subs.add(
      this.politicianId$.subscribe(id => {
        this.politicianId = id;
      })
    );
    this.subs.add(
      this.politiciansService
        .getPolitician(this.politicianId)
        .subscribe((politicians: any) => {
          this.politician = politicians[0];
          console.log(this.politician);
        })
    );
    this.subs.add(
      this.decisionsService.getAllDecisions().subscribe((decisions: any) => {
        this.decisions$ = decisions;
      })
    );

    this.subs.add(
      this.politiciansService
        .getPoliticianVotes(this.politicianId)
        .subscribe((votes: any) => {
          this.politicianVotes = votes;
        })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  findVote(decisionId: string) {
    const politicianVote: any = this.politicianVotes.find(
      (vote: any) => vote.decisionKey === decisionId
    );
    if (politicianVote) {
      return politicianVote.vote || 'No ha votado esta decisión';
    } else {
      return 'No ha votado esta decisión';
    }
  }
}
