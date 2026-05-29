import { Component, Input, inject } from '@angular/core';

import { DomoticaService } from '../../services/domotica.service';

@Component({
  selector: 'app-aire-control',
  standalone: true,
  templateUrl: './aire-control.component.html'
})
export class AireControlComponent {
  private readonly domoticaService = inject(DomoticaService);

  @Input({ required: true }) temperatura = 22;

  disminuir(): void {
    void this.domoticaService.cambiarTemperatura(this.temperatura - 1);
  }

  aumentar(): void {
    void this.domoticaService.cambiarTemperatura(this.temperatura + 1);
  }
}
