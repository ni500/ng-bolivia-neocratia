import { Component, OnInit, OnDestroy } from '@angular/core';
import { PoliticiansService } from '../politicians.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-politicians-list',
  templateUrl: './politicians-list.component.html',
  styles: []
})
export class PoliticiansListComponent implements OnInit, OnDestroy {
  politicians$: Observable<[]>;
  subs = new Subscription();
  constructor(
    private politiciansService: PoliticiansService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.subs.add(
      this.politiciansService
        .getAllPoliticians()
        .subscribe((politicians: any) => {
          this.politicians$ = politicians;
        })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
