import { Component, Input } from '@angular/core';

import { PuertaEstado } from '../../services/firebase.service';

@Component({
  selector: 'app-puerta-monitor',
  standalone: true,
  templateUrl: './puerta-monitor.component.html'
})
export class PuertaMonitorComponent {
  @Input({ required: true }) estado: PuertaEstado = 'cerrada';
}
