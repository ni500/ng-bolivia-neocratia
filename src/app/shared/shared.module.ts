import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
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
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const MaterialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatListModule
];

const CoreModules = [FormsModule, FlexLayoutModule, LayoutModule, RouterModule];

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [CommonModule, MaterialModules, CoreModules],
  exports: [
    SidenavComponent,
    MaterialModules,
    CoreModules,
    ToolbarComponent,
    PageNotFoundComponent,
    HomePageComponent
  ]
})
export class SharedModule {}
