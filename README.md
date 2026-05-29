# Proyecto Domótica con Angular + Firebase

Aplicación web de domótica dividida en dos sistemas independientes:

- **Panel de Control (`/control`)**: permite modificar en tiempo real los estados de luz, alarma, puerta y aire acondicionado.
- **Panel de Monitoreo (`/monitoreo`)**: muestra los estados actuales en modo solo lectura, sin botones ni acciones de modificación.

## Tecnologías

- Angular
- TypeScript
- Firebase Realtime Database
- AngularFire
- RxJS Observables

## Estructura principal

```text
src/app/services/firebase.service.ts
src/app/services/domotica.service.ts
src/app/control/luz-control
src/app/control/alarma-control
src/app/control/puerta-control
src/app/control/aire-control
src/app/monitor/luz-monitor
src/app/monitor/alarma-monitor
src/app/monitor/puerta-monitor
src/app/monitor/aire-monitor
```

## Configuración Firebase

Actualiza `src/environments/environment.ts` con los datos de tu proyecto Firebase:

```ts
firebase: {
  apiKey: '...',
  authDomain: '...',
  databaseURL: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...'
}
```

La app trabaja sobre el nodo `domotica` de Realtime Database con esta forma:

```json
{
  "domotica": {
    "luz": true,
    "alarma": false,
    "puerta": "cerrada",
    "aire": {
      "temperatura": 22
    }
  }
}
```

## Ejecutar

```bash
npm install
npm start
```

Luego abre `http://localhost:4200`.
