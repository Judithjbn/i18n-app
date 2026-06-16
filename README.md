# i18n-app

Proyecto sencillo de Angular para practicar **traducciones (i18n)** y **cookies**, usando dos librerías:

- [`@ngx-translate/core`](https://github.com/ngx-translate/core) + `@ngx-translate/http-loader` → traducciones
- [`ngx-cookie-service-ssr`](https://www.npmjs.com/package/ngx-cookie-service-ssr) → cookies (compatible con SSR)

## ¿Qué hace?

Un selector de idioma que cambia los textos de la app entre `es`, `en`, `fr` e `it`, y guarda el idioma elegido en una cookie para que se recuerde entre visitas.

## Cómo funciona

1. **Selector de idioma** ([lenguage-selector.ts](src/app/shared/components/lenguage-selector/lenguage-selector.ts)) — pinta las opciones de idioma y, al cambiar el `<select>`, llama al servicio.
2. **Servicio de idioma** ([languageService.ts](src/app/core/services/languageService.ts)) — hace el trabajo real:
   - guarda el idioma en una cookie (`cookie.set('lang', lang)`)
   - le dice a `TranslateService` que use ese idioma (`translate.use(lang)`)
3. **Archivos de traducción** ([public/assets/i18n/](public/assets/i18n/)) — un `.json` por idioma (`es.json`, `en.json`, `fr.json`, `it.json`) con las claves de texto.
4. **Configuración global** ([app.config.ts](src/app/app.config.ts)) — registra `SsrCookieService` y configura `provideTranslateService` con el loader que busca los `.json` en `/assets/i18n/`.

En las plantillas, los textos se muestran con el pipe de traducción, por ejemplo `{{ 'welcomeMessage' | translate }}`, y el idioma elegido vive en la cookie `lang` para persistir entre recargas.

## Levantar el proyecto

```bash
npm install
npm start
```
