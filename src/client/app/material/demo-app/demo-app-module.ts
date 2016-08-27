import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DemoAppComponent, HomeComponent} from './demo-app/demo-app';
import {routing} from './demo-app/routes';
import {MaterialModule} from '../../all/all';
import {ProgressBarDemoComponent} from './progress-bar/progress-bar-demo';
import {JazzDialogComponent, DialogDemoComponent} from './dialog/dialog-demo';
import {RippleDemoComponent} from './ripple/ripple-demo';
import {IconDemoComponent} from './icon/icon-demo';
import {GesturesDemoComponent} from './gestures/gestures-demo';
import {InputDemoComponent} from './input/input-demo';
import {CardDemoComponent} from './card/card-demo';
import {RadioDemoComponent} from './radio/radio-demo';
import {ButtonToggleDemoComponent} from './button-toggle/button-toggle-demo';
import {ProgressCircleDemoComponent} from './progress-circle/progress-circle-demo';
import {TooltipDemoComponent} from './tooltip/tooltip-demo';
import {ListDemoComponent} from './list/list-demo';
import {BaselineDemoComponent} from './baseline/baseline-demo';
import {GridListDemoComponent} from './grid-list/grid-list-demo';
import {LiveAnnouncerDemoComponent} from './live-announcer/live-announcer-demo';
import {OverlayDemoComponent, SpagettiPanelComponent, RotiniPanelComponent} from './overlay/overlay-demo';
import {SlideToggleDemoComponent} from './slide-toggle/slide-toggle-demo';
import {ToolbarDemoComponent} from './toolbar/toolbar-demo';
import {ButtonDemoComponent} from './button/button-demo';
import {MdCheckboxDemoNestedChecklistComponent, CheckboxDemoComponent} from './checkbox/checkbox-demo';
import {SliderDemoComponent} from './slider/slider-demo';
import {SidenavDemoComponent} from './sidenav/sidenav-demo';
import {PortalDemoComponent, ScienceJokeComponent} from './portal/portal-demo';
import {MenuDemoComponent} from './menu/menu-demo';
import {TabsDemoComponent} from './tabs/tab-group-demo';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
  ],
  providers: [
  ],
  declarations: [
    BaselineDemoComponent,
    ButtonDemoComponent,
    ButtonToggleDemoComponent,
    CardDemoComponent,
    CheckboxDemoComponent,
    DemoAppComponent,
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
    RadioDemoComponent,
    RippleDemoComponent,
    RotiniPanelComponent,
    ScienceJokeComponent,
    SidenavDemoComponent,
    SliderDemoComponent,
    SlideToggleDemoComponent,
    SpagettiPanelComponent,
    TabsDemoComponent,
    ToolbarDemoComponent,
    TooltipDemoComponent,
  ],
})

export default class DemoAppModule { }
