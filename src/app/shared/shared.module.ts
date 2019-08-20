import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const MaterialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatListModule
];

const CoreModules = [FormsModule, FlexLayoutModule];

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, MaterialModules, CoreModules, RouterModule],
  exports: [SideMenuComponent, MaterialModules, CoreModules]
})
export class SharedModule {}
