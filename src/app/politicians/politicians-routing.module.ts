import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliticianViewComponent } from './politician-view/politician-view.component';
import { PoliticiansListComponent } from './politicians-list/politicians-list.component';

const routes: Routes = [
  {
    path: '',
    component: PoliticiansListComponent
  },
  {
    path: ':id',
    component: PoliticianViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticiansRoutingModule {}
