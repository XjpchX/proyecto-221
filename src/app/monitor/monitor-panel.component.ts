import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AireMonitorComponent } from './aire-monitor/aire-monitor.component';
import { AlarmaMonitorComponent } from './alarma-monitor/alarma-monitor.component';
import { LuzMonitorComponent } from './luz-monitor/luz-monitor.component';
import { PuertaMonitorComponent } from './puerta-monitor/puerta-monitor.component';
import { DomoticaService } from '../services/domotica.service';

@Component({
  selector: 'app-monitor-panel',
  standalone: true,
  imports: [AsyncPipe, AireMonitorComponent, AlarmaMonitorComponent, LuzMonitorComponent, PuertaMonitorComponent],
  templateUrl: './monitor-panel.component.html',
  styleUrl: './monitor-panel.component.css'
})
export class MonitorPanelComponent {
  private readonly domoticaService = inject(DomoticaService);

  readonly estado$ = this.domoticaService.estado$;
}
