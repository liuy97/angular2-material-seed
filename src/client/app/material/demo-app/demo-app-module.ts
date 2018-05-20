import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './demo-app/demo-app';
import { demoRouting } from './demo-app/routes';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
} from '@angular/material';
import { ProgressBarDemoComponent } from './progress-bar/progress-bar-demo';
import { JazzDialogComponent, DialogDemoComponent, ContentElementDialogComponent, IFrameDialogComponent } from './dialog/dialog-demo';
import { RippleDemoComponent } from './ripple/ripple-demo';
import { IconDemoComponent } from './icon/icon-demo';
import { GesturesDemoComponent } from './gestures/gestures-demo';
import { InputDemoComponent } from './input/input-demo';
import { CardDemoComponent } from './card/card-demo';
import { RadioDemoComponent } from './radio/radio-demo';
import { ButtonToggleDemoComponent } from './button-toggle/button-toggle-demo';
import { ProgressCircleDemoComponent } from './progress-circle/progress-circle-demo';
import { TooltipDemoComponent } from './tooltip/tooltip-demo';
import { ListDemoComponent } from './list/list-demo';
import { BaselineDemoComponent } from './baseline/baseline-demo';
import { GridListDemoComponent } from './grid-list/grid-list-demo';
import { LiveAnnouncerDemoComponent } from './live-announcer/live-announcer-demo';
import { OverlayDemoComponent } from './overlay/overlay-demo';
import { SlideToggleDemoComponent } from './slide-toggle/slide-toggle-demo';
import { ToolbarDemoComponent } from './toolbar/toolbar-demo';
import { ButtonDemoComponent } from './button/button-demo';
import { MdCheckboxDemoNestedChecklistComponent, CheckboxDemoComponent } from './checkbox/checkbox-demo';
import { SliderDemoComponent } from './slider/slider-demo';
import { SidenavDemoComponent } from './sidenav/sidenav-demo';
import { PortalDemoComponent, ScienceJokeComponent } from './portal/portal-demo';
import { MenuDemoComponent } from './menu/menu-demo';
import { TabsDemoComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent, CounterComponent
} from './tabs/tabs-demo';
import { ChipsDemoComponent } from './chips/chips-demo';
import { SelectDemoComponent } from './select/select-demo';
import { SnackBarDemoComponent } from './snack-bar/snack-bar-demo';
import { ProjectionDemoComponent } from './projection/projection-demo';
import { PlatformDemoComponent } from './platform/platform-demo';
import { AutocompleteDemoComponent } from './autocomplete/autocomplete-demo';
import { TableDemoComponent } from './table/table-demo';
import { PeopleDatabase } from './table/people-database';
import { TreeDemoModule } from './tree/tree-demo-module';

import { CdkTableModule } from '@angular/cdk/table';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    demoRouting,
    CdkTableModule,
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    TreeDemoModule,
  ],
  providers: [
    PeopleDatabase,
  ],
  declarations: [
    AutocompleteDemoComponent,
    BaselineDemoComponent,
    ButtonDemoComponent,
    ButtonToggleDemoComponent,
    CardDemoComponent,
    CheckboxDemoComponent,
    HomeComponent,
    DialogDemoComponent,
    GesturesDemoComponent,
    GridListDemoComponent,
    IconDemoComponent,
    InputDemoComponent,
    JazzDialogComponent,
    ListDemoComponent,
    LiveAnnouncerDemoComponent,
    MdCheckboxDemoNestedChecklistComponent,
    MenuDemoComponent,
    OverlayDemoComponent,
    PortalDemoComponent,
    ProgressBarDemoComponent,
    ProgressCircleDemoComponent,
    PlatformDemoComponent,
    RadioDemoComponent,
    RippleDemoComponent,
    ScienceJokeComponent,
    SidenavDemoComponent,
    SliderDemoComponent,
    SlideToggleDemoComponent,
    SnackBarDemoComponent,
    TabsDemoComponent,
    SunnyTabContentComponent,
    RainyTabContentComponent,
    FoggyTabContentComponent,
    ToolbarDemoComponent,
    TooltipDemoComponent,
    TableDemoComponent,
    ProjectionDemoComponent,
    ChipsDemoComponent,
    SelectDemoComponent,
    ContentElementDialogComponent,
    CounterComponent,
    IFrameDialogComponent,
  ],
  entryComponents: [
    ContentElementDialogComponent,
    JazzDialogComponent,
    ScienceJokeComponent,
  ],
})

export class DemoAppModule { }
