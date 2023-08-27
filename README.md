# WhatsApp Web.js

## Requerimientos

- Node 18.17.1

## Resumen

La librería `whatsapp-web.js` es un cliente de la API de WhatsApp que se conecta a través de la
aplicación de navegador WhatsApp Web. Utiliza Puppeteer para ejecutar una instancia real de WhatsApp
Web y así evitar bloqueos. NOTA: No puedo garantizar que no serás bloqueado utilizando este método,
aunque ha funcionado para mí. WhatsApp no permite bots o clientes no oficiales en su plataforma, por
lo que esto no debería considerarse totalmente seguro. Enlaces rápidos:

- [Documentación](https://wwebjs.dev/guide/#installation)
- [GitHub](https://github.com/pedroslopez/whatsapp-web.js)
- [Npm](https://www.npmjs.com/package/whatsapp-web.js)

## Configuración

Para comenzar, asegúrate de tener todas las dependencias instaladas ejecutando: `npm install`. Luego
puedes ejecutar el proyecto con el siguiente comando: `npm run dev`.

### Nota sobre la ejecución

Al ejecutar `npm run dev`, se generarán dos carpetas en la raíz del proyecto: `.wwebjs_auth` y
`.wwebjs_cache`. Existe un bug al generar el directorio `.wwebjs_cache` en algunas distribuciones de
Linux, por lo tanto, se subirá en el repositorio con este ultimo.
