import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  declarations: [],
  imports: [CommonModule, MaterialModules, CoreModules],
  exports: [MaterialModules, CoreModules]
})
export class CoreModule {}
