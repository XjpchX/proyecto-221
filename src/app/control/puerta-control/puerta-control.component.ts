import { Component, Input, inject } from '@angular/core';

import { DomoticaService } from '../../services/domotica.service';
import { PuertaEstado } from '../../services/firebase.service';

@Component({
  selector: 'app-puerta-control',
  standalone: true,
  templateUrl: './puerta-control.component.html'
})
export class PuertaControlComponent {
  private readonly domoticaService = inject(DomoticaService);

  @Input({ required: true }) estado: PuertaEstado = 'cerrada';

  alternarPuerta(): void {
    void this.domoticaService.cambiarPuerta(this.estado === 'abierta' ? 'cerrada' : 'abierta');
  }
}
