import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AireControlComponent } from './aire-control/aire-control.component';
import { AlarmaControlComponent } from './alarma-control/alarma-control.component';
import { LuzControlComponent } from './luz-control/luz-control.component';
import { PuertaControlComponent } from './puerta-control/puerta-control.component';
import { DomoticaService } from '../services/domotica.service';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [AsyncPipe, AireControlComponent, AlarmaControlComponent, LuzControlComponent, PuertaControlComponent],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent {
  private readonly domoticaService = inject(DomoticaService);

  readonly estado$ = this.domoticaService.estado$;
}
