import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecisionsListComponent } from './decisions/decisions-list/decisions-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomePageComponent } from './shared/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'politicos',
    loadChildren: () =>
      import('./politicians/politicians.module').then(m => m.PoliticiansModule),
    data: { title: 'Políticos' }
  },
  {
    path: 'activistas',
    loadChildren: () =>
      import('./activists/activists.module').then(m => m.ActiviststModule),
    data: { title: 'Activistas' }
  },
  {
    path: 'decisiones',
    component: DecisionsListComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
