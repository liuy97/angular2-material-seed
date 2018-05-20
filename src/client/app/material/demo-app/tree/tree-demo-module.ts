/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatTreeModule
} from '@angular/material';
import { TreeDemoComponent } from './tree-demo';
import { ChecklistTreeDemoComponent } from './checklist-tree-demo/checklist-tree-demo';
import { ChecklistNestedTreeDemoComponent } from './checklist-tree-demo/checklist-nested-tree-demo';
import { DynamicTreeDemoComponent } from './dynamic-tree-demo/dynamic-tree-demo';
import { LoadmoreTreeDemoComponent } from './loadmore-tree-demo/loadmore-tree-demo';


@NgModule({
  imports: [
    CdkTreeModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTreeModule,
    MatProgressBarModule,
  ],
  declarations: [
    ChecklistNestedTreeDemoComponent,
    ChecklistTreeDemoComponent,
    TreeDemoComponent,
    DynamicTreeDemoComponent,
    LoadmoreTreeDemoComponent
  ],
})
export class TreeDemoModule { }
