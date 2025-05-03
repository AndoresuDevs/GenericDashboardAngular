import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import MyPreset from './themes/sky-preset';
import Aura from '@primeng/themes/aura';
import Nora from '@primeng/themes/nora';
import Material from '@primeng/themes/material';
import Lara from '@primeng/themes/lara';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: MyPreset, // Use your custom preset 
            options: {
              darkModeSelector: '.dark-mode'  // clave para el cambio dinámico
            }
        }
    })
  ]
};

