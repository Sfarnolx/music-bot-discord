# Bot de Música para Discord

Este proyecto es un bot de Discord que permite a los usuarios reproducir música en un canal de voz escribiendo el comando `/musica <nombre>`.

## Características

- Se conecta a un canal de voz
- Reproduce la música solicitada
- Maneja múltiples solicitudes de música

## Estructura del Proyecto


discord-music-bot ├── src │ ├── bot.ts # Punto de entrada del bot │ ├── commands │ │ └── music.ts # Manejador de comandos para la reproducción de música │ ├── utils │ │ └── index.ts # Funciones utilitarias para la reproducción de música │ └── types │ └── index.ts # Interfaces de TypeScript para comandos y respuestas ├── package.json # Archivo de configuración de npm ├── tsconfig.json # Archivo de configuración de TypeScript └── README.md # Documentación del proyecto



## Instalación

1. Clona el repositorio:git clone <repository-url>
2. Navega al directorio del proyecto:cd discord-music-bot
3. Instala las dependencias:npm install

## Uso

1. Inicia el bot:npm run start
2. Únete a un canal de voz en tu servidor de Discord.
3. Escribe el comando:/musica <nombre>
Reemplaza `<nombre>` con el nombre de la canción que quieres reproducir.

## Contribuir

Siéntete libre de enviar problemas o solicitudes de extracción para mejoras y correcciones de errores.
