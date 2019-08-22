import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatExpansionModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const MaterialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatExpansionModule
];

const CoreModules = [
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  LayoutModule,
  RouterModule,
  AngularFirestoreModule
];

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
