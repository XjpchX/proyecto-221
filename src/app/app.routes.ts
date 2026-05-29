import { Routes } from '@angular/router';

import { ControlPanelComponent } from './control/control-panel.component';
import { MonitorPanelComponent } from './monitor/monitor-panel.component';

export const routes: Routes = [
  { path: 'control', component: ControlPanelComponent, title: 'Panel de control domótico' },
  { path: 'monitoreo', component: MonitorPanelComponent, title: 'Panel de monitoreo domótico' },
  { path: '', pathMatch: 'full', redirectTo: 'control' },
  { path: '**', redirectTo: 'control' }
];
