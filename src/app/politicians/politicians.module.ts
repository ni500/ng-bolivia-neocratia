import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticiansRoutingModule } from './politicians-routing.module';
import { PoliticiansListComponent } from './politicians-list/politicians-list.component';
import { PoliticianViewComponent } from './politician-view/politician-view.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [PoliticiansListComponent, PoliticianViewComponent],
  imports: [CommonModule, PoliticiansRoutingModule, SharedModule, CoreModule],
  exports: [PoliticiansListComponent, PoliticianViewComponent]
})
export class PoliticiansModule {}
