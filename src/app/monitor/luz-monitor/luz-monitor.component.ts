import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-luz-monitor',
  standalone: true,
  templateUrl: './luz-monitor.component.html'
})
export class LuzMonitorComponent {
  @Input({ required: true }) encendida = false;
}
