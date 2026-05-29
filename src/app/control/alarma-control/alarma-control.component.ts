import { Component, Input, inject } from '@angular/core';

import { DomoticaService } from '../../services/domotica.service';

@Component({
  selector: 'app-alarma-control',
  standalone: true,
  templateUrl: './alarma-control.component.html'
})
export class AlarmaControlComponent {
  private readonly domoticaService = inject(DomoticaService);

  @Input({ required: true }) activada = false;

  alternarAlarma(): void {
    void this.domoticaService.cambiarAlarma(!this.activada);
  }
}
