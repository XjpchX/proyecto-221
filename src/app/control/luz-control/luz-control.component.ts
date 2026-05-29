import { Component, Input, inject } from '@angular/core';

import { DomoticaService } from '../../services/domotica.service';

@Component({
  selector: 'app-luz-control',
  standalone: true,
  templateUrl: './luz-control.component.html'
})
export class LuzControlComponent {
  private readonly domoticaService = inject(DomoticaService);

  @Input({ required: true }) encendida = false;

  alternarLuz(): void {
    void this.domoticaService.cambiarLuz(!this.encendida);
  }
}
