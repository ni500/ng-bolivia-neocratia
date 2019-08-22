import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticiansRoutingModule } from './politicians-routing.module';
import { PoliticiansListComponent } from './politicians-list/politicians-list.component';
import { PoliticianViewComponent } from './politician-view/politician-view.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AddPoliticianComponent } from './add-politician/add-politician.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DecisionsModule } from '../decisions/decisions.module';

@NgModule({
  declarations: [
    PoliticiansListComponent,
    PoliticianViewComponent,
    AddPoliticianComponent
  ],
  imports: [
    CommonModule,
    PoliticiansRoutingModule,
    SharedModule,
    CoreModule,
    DecisionsModule
  ],
  exports: [PoliticiansListComponent, PoliticianViewComponent]
})
export class PoliticiansModule {}
