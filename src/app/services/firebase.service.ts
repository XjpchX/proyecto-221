import { Injectable, inject } from '@angular/core';
import { Database, get, objectVal, ref, set } from '@angular/fire/database';
import { Observable } from 'rxjs';

export type PuertaEstado = 'abierta' | 'cerrada';

export interface DomoticaEstado {
  luz: boolean;
  alarma: boolean;
  puerta: PuertaEstado;
  aire: {
    temperatura: number;
  };
}

export const ESTADO_INICIAL_DOMOTICA: DomoticaEstado = {
  luz: false,
  alarma: false,
  puerta: 'cerrada',
  aire: {
    temperatura: 22
  }
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private readonly database = inject(Database);
  private readonly domoticaRef = ref(this.database, 'domotica');

  obtenerEstadoDomotica(): Observable<DomoticaEstado | null> {
    return objectVal<DomoticaEstado>(this.domoticaRef);
  }

  async inicializarEstadoSiEsNecesario(): Promise<void> {
    const snapshot = await get(this.domoticaRef);

    if (!snapshot.exists()) {
      await set(this.domoticaRef, ESTADO_INICIAL_DOMOTICA);
    }
  }

  actualizarLuz(encendida: boolean): Promise<void> {
    return set(ref(this.database, 'domotica/luz'), encendida);
  }

  actualizarAlarma(activada: boolean): Promise<void> {
    return set(ref(this.database, 'domotica/alarma'), activada);
  }

  actualizarPuerta(estado: PuertaEstado): Promise<void> {
    return set(ref(this.database, 'domotica/puerta'), estado);
  }

  actualizarTemperatura(temperatura: number): Promise<void> {
    return set(ref(this.database, 'domotica/aire/temperatura'), temperatura);
  }
}
