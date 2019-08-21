import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecisionsListComponent } from './decisions/decisions-list/decisions-list.component';

const routes: Routes = [
  {
    path: 'congreso',
    loadChildren: () =>
      import('./politicians/politicians.module').then(m => m.PoliticiansModule),
    data: { title: 'Congreso - Políticos' }
  },
  {
    path: 'decisiones',
    component: DecisionsListComponent
  },
  { path: '**', redirectTo: '/congreso', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
