import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './demo-app/demo-app';
import { demoRouting } from './demo-app/routes';
import { MaterialModule } from '@angular/material';
import { ProgressBarDemoComponent } from './progress-bar/progress-bar-demo';
import { JazzDialogComponent, DialogDemoComponent } from './dialog/dialog-demo';
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
import { OverlayDemoComponent, SpagettiPanelComponent, RotiniPanelComponent } from './overlay/overlay-demo';
import { SlideToggleDemoComponent } from './slide-toggle/slide-toggle-demo';
import { ToolbarDemoComponent } from './toolbar/toolbar-demo';
import { ButtonDemoComponent } from './button/button-demo';
import { MdCheckboxDemoNestedChecklistComponent, CheckboxDemoComponent } from './checkbox/checkbox-demo';
import { SliderDemoComponent } from './slider/slider-demo';
import { SidenavDemoComponent } from './sidenav/sidenav-demo';
import { PortalDemoComponent, ScienceJokeComponent } from './portal/portal-demo';
import { MenuDemoComponent } from './menu/menu-demo';
import { TabsDemoComponent, SunnyTabContentComponent, RainyTabContentComponent, FoggyTabContentComponent
  } from './tabs/tabs-demo';
import { ChipsDemoComponent } from './chips/chips-demo';
import { SelectDemoComponent } from './select/select-demo';
import { SnackBarDemoComponent } from './snack-bar/snack-bar-demo';
import { ProjectionDemoComponent } from './projection/projection-demo';
import { PlatformDemoComponent } from './platform/platform-demo';
import { AutocompleteDemoComponent } from './autocomplete/autocomplete-demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    demoRouting,
  ],
  providers: [
  ],
  declarations: [
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
    RotiniPanelComponent,
    ScienceJokeComponent,
    SidenavDemoComponent,
    SliderDemoComponent,
    SlideToggleDemoComponent,
    SnackBarDemoComponent,
    SpagettiPanelComponent,
    TabsDemoComponent,
    SunnyTabContentComponent,
    RainyTabContentComponent,
    FoggyTabContentComponent,
    ToolbarDemoComponent,
    TooltipDemoComponent,
  ],
  entryComponents: [
    JazzDialogComponent,
    RotiniPanelComponent,
    ScienceJokeComponent,
    SpagettiPanelComponent,
  ],
})

export class DemoAppModule { }
