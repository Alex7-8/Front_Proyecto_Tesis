import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Obtener la URL actual del navegador
const currentUrl = window.location.href;

// Verificar si la URL contiene un signo de interrogación
const indexOfQuestionMark = currentUrl.indexOf('?');
if (indexOfQuestionMark !== -1) {
  // Si la URL contiene un signo de interrogación, redireccionar a la URL sin los parámetros
  const baseUrl = currentUrl.substring(0, indexOfQuestionMark);
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  alert(token);
  window.location.href = baseUrl;
} else {
  // Si la URL no contiene parámetros, se está cargando la plantilla "validar"

  // Obtener el token de la URL
 
 

  // if (token) {
  //   // Guardar el token en el LocalStorage con el nombre de "token_dispositivo"
  //   localStorage.setItem('token_dispositivo', token);
  // }
}
