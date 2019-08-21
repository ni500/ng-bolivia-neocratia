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
import { NavbarComponent } from './navbar/navbar.component';
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
  declarations: [SideMenuComponent, NavbarComponent, PageNotFoundComponent, HomePageComponent],
  imports: [CommonModule, MaterialModules, CoreModules],
  exports: [SideMenuComponent, MaterialModules, CoreModules, NavbarComponent, PageNotFoundComponent, HomePageComponent]
})
export class SharedModule {}
