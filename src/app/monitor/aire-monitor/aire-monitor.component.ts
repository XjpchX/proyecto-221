import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aire-monitor',
  standalone: true,
  templateUrl: './aire-monitor.component.html'
})
export class AireMonitorComponent {
  @Input({ required: true }) temperatura = 22;
}
