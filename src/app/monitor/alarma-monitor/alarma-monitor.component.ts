import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alarma-monitor',
  standalone: true,
  templateUrl: './alarma-monitor.component.html'
})
export class AlarmaMonitorComponent {
  @Input({ required: true }) activada = false;
}
