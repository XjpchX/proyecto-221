import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

import {
  DomoticaEstado,
  ESTADO_INICIAL_DOMOTICA,
  FirebaseService,
  PuertaEstado
} from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class DomoticaService {
  private readonly firebaseService = inject(FirebaseService);

  readonly estado$: Observable<DomoticaEstado> = this.firebaseService.obtenerEstadoDomotica().pipe(
    map((estado) => ({
      ...ESTADO_INICIAL_DOMOTICA,
      ...estado,
      aire: {
        ...ESTADO_INICIAL_DOMOTICA.aire,
        ...estado?.aire
      }
    })),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  inicializar(): Promise<void> {
    return this.firebaseService.inicializarEstadoSiEsNecesario();
  }

  cambiarLuz(encendida: boolean): Promise<void> {
    return this.firebaseService.actualizarLuz(encendida);
  }

  cambiarAlarma(activada: boolean): Promise<void> {
    return this.firebaseService.actualizarAlarma(activada);
  }

  cambiarPuerta(estado: PuertaEstado): Promise<void> {
    return this.firebaseService.actualizarPuerta(estado);
  }

  cambiarTemperatura(temperatura: number): Promise<void> {
    return this.firebaseService.actualizarTemperatura(temperatura);
  }
}
