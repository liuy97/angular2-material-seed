import {RouterModule} from '@angular/router';
import {Home} from './demo-app';
import {ButtonDemo} from '../button/button-demo';
import {BaselineDemo} from '../baseline/baseline-demo';
import {ButtonToggleDemo} from '../button-toggle/button-toggle-demo';
import {TabsDemo} from '../tabs/tab-group-demo';
import {GridListDemo} from '../grid-list/grid-list-demo';
import {GesturesDemo} from '../gestures/gestures-demo';
import {LiveAnnouncerDemo} from '../live-announcer/live-announcer-demo';
import {ListDemo} from '../list/list-demo';
import {IconDemo} from '../icon/icon-demo';
import {ToolbarDemo} from '../toolbar/toolbar-demo';
import {InputDemo} from '../input/input-demo';
import {CheckboxDemo} from '../checkbox/checkbox-demo';
import {OverlayDemo} from '../overlay/overlay-demo';
import {PortalDemo} from '../portal/portal-demo';
import {ProgressBarDemo} from '../progress-bar/progress-bar-demo';
import {ProgressCircleDemo} from '../progress-circle/progress-circle-demo';
import {SlideToggleDemo} from '../slide-toggle/slide-toggle-demo';
import {SliderDemo} from '../slider/slider-demo';
import {SidenavDemo} from '../sidenav/sidenav-demo';
import {RadioDemo} from '../radio/radio-demo';
import {CardDemo} from '../card/card-demo';
import {MenuDemo} from '../menu/menu-demo';
import {RippleDemo} from '../ripple/ripple-demo';
import {DialogDemo} from '../dialog/dialog-demo';
import {TooltipDemo} from '../tooltip/tooltip-demo';


export const routes = RouterModule.forChild([
  //{path: '', component: Home},
   { path: 'demo', redirectTo: 'demo/button', pathMatch: 'full'},
  {path: 'demo/button', component: ButtonDemo},
  {path: 'demo/card', component: CardDemo},
  {path: 'demo/radio', component: RadioDemo},
  {path: 'demo/sidenav', component: SidenavDemo},
  {path: 'demo/slide-toggle', component: SlideToggleDemo},
  {path: 'demo/slider', component: SliderDemo},
  {path: 'demo/progress-circle', component: ProgressCircleDemo},
  {path: 'demo/progress-bar', component: ProgressBarDemo},
  {path: 'demo/portal', component: PortalDemo},
  {path: 'demo/overlay', component: OverlayDemo},
  {path: 'demo/checkbox', component: CheckboxDemo},
  {path: 'demo/input', component: InputDemo},
  {path: 'demo/toolbar', component: ToolbarDemo},
  {path: 'demo/icon', component: IconDemo},
  {path: 'demo/list', component: ListDemo},
  {path: 'demo/menu', component: MenuDemo},
  {path: 'demo/live-announcer', component: LiveAnnouncerDemo},
  {path: 'demo/gestures', component: GesturesDemo},
  {path: 'demo/grid-list', component: GridListDemo},
  {path: 'demo/tabs', component: TabsDemo},
  {path: 'demo/button-toggle', component: ButtonToggleDemo},
  {path: 'demo/baseline', component: BaselineDemo},
  {path: 'demo/ripple', component: RippleDemo},
  {path: 'demo/dialog', component: DialogDemo},
  {path: 'demo/tooltip', component: TooltipDemo},
]);

//export const DEMO_APP_ROUTE_PROVIDER = provideRouter(routes);
