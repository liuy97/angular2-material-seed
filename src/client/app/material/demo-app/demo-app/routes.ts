import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './demo-app';
import { AutocompleteDemoComponent } from '../autocomplete/autocomplete-demo';
import { ButtonDemoComponent } from '../button/button-demo';
import { BaselineDemoComponent } from '../baseline/baseline-demo';
import { ButtonToggleDemoComponent } from '../button-toggle/button-toggle-demo';
import { TabsDemoComponent, SunnyTabContentComponent,
  RainyTabContentComponent, FoggyTabContentComponent } from '../tabs/tabs-demo';
import { GridListDemoComponent } from '../grid-list/grid-list-demo';
import { GesturesDemoComponent } from '../gestures/gestures-demo';
import { LiveAnnouncerDemoComponent } from '../live-announcer/live-announcer-demo';
import { ListDemoComponent } from '../list/list-demo';
import { IconDemoComponent } from '../icon/icon-demo';
import { ToolbarDemoComponent } from '../toolbar/toolbar-demo';
import { InputDemoComponent } from '../input/input-demo';
import { CheckboxDemoComponent } from '../checkbox/checkbox-demo';
import { OverlayDemoComponent } from '../overlay/overlay-demo';
import { PortalDemoComponent } from '../portal/portal-demo';
import { ProgressBarDemoComponent } from '../progress-bar/progress-bar-demo';
import { ProgressCircleDemoComponent } from '../progress-circle/progress-circle-demo';
import { SlideToggleDemoComponent } from '../slide-toggle/slide-toggle-demo';
import { SliderDemoComponent } from '../slider/slider-demo';
import { SidenavDemoComponent } from '../sidenav/sidenav-demo';
import { RadioDemoComponent } from '../radio/radio-demo';
import { CardDemoComponent } from '../card/card-demo';
import { MenuDemoComponent } from '../menu/menu-demo';
import { RippleDemoComponent } from '../ripple/ripple-demo';
import { DialogDemoComponent } from '../dialog/dialog-demo';
import { TooltipDemoComponent } from '../tooltip/tooltip-demo';
import { TableDemoComponent } from '../table/table-demo';
import { TreeDemoComponent } from '../tree/tree-demo';

export const demoRoutes: Routes = [
  {
    path: 'demo',
    component: HomeComponent,
    children: [
      { path: 'autocomplete', component: AutocompleteDemoComponent },
      { path: 'button', component: ButtonDemoComponent },
      { path: 'card', component: CardDemoComponent },
      { path: 'radio', component: RadioDemoComponent },
      { path: 'sidenav', component: SidenavDemoComponent },
      { path: 'slide-toggle', component: SlideToggleDemoComponent },
      { path: 'slider', component: SliderDemoComponent },
      { path: 'progress-circle', component: ProgressCircleDemoComponent },
      { path: 'progress-bar', component: ProgressBarDemoComponent },
      { path: 'portal', component: PortalDemoComponent },
      { path: 'overlay', component: OverlayDemoComponent },
      { path: 'checkbox', component: CheckboxDemoComponent },
      { path: 'input', component: InputDemoComponent },
      { path: 'toolbar', component: ToolbarDemoComponent },
      { path: 'icon', component: IconDemoComponent },
      { path: 'list', component: ListDemoComponent },
      { path: 'menu', component: MenuDemoComponent },
      { path: 'live-announcer', component: LiveAnnouncerDemoComponent },
      { path: 'gestures', component: GesturesDemoComponent },
      { path: 'grid-list', component: GridListDemoComponent },
      { path: 'tabs', component: TabsDemoComponent,
        children: [
          { path: '', redirectTo: 'sunny-tab', pathMatch: 'full' },
          { path: 'sunny-tab', component: SunnyTabContentComponent },
          { path: 'rainy-tab', component: RainyTabContentComponent },
          { path: 'foggy-tab', component: FoggyTabContentComponent },
        ]
      },
      { path: 'button-toggle', component: ButtonToggleDemoComponent },
      { path: 'baseline', component: BaselineDemoComponent },
      { path: 'ripple', component: RippleDemoComponent },
      { path: 'dialog', component: DialogDemoComponent },
      { path: 'tooltip', component: TooltipDemoComponent },
      { path: 'table', component: TableDemoComponent },
      { path: 'tree', component: TreeDemoComponent },
    ]
  }
];

export const demoRouting: ModuleWithProviders = RouterModule.forChild(demoRoutes);
