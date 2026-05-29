import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { DomoticaService } from './services/domotica.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly domoticaService = inject(DomoticaService);

  readonly estado$ = this.domoticaService.estado$;

  ngOnInit(): void {
    void this.domoticaService.inicializar();
  }
}
