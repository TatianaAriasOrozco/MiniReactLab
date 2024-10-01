# React Mini-Projects Portfolio

Este proyecto es un portafolio de mini-proyectos desarrollados con **React**. El portafolio incluye una serie de aplicaciones pequeñas con diferentes funcionalidades. Cada proyecto dentro de este portafolio está diseñado para mejorar las habilidades en React y está acompañado de características adicionales, como internacionalización y persistencia de datos.
El proyecyo fue desarrollado en julio de 2024 como asignación en el bootcamp intensivo de desarrollo web de codeable, en colaboración con dos compañeros, la metodología de trabajo fue asignar "issues" en un tablero kanban y así cada uno aportó de manera significativa a la entrega exitosa del proyecto. 

## Proyectos Incluidos

### 1. ReactDev Tic-Tac-Toe
- Un juego clásico de tres en raya mejorado con funcionalidades adicionales:
  - Estilos personalizados en CSS basados en el diseño en Figma.
  - Botón de reinicio que restaura el juego a su estado inicial.
  - Línea ganadora resaltada en verde.
  - Mensaje de empate si no hay un ganador.
  - Persistencia del estado del juego en `localStorage`.

### 2. Poke Collection
- Aplicación para buscar y gestionar una colección de Pokemones:
  - Identificación de usuario y persistencia del username en `localStorage`.
  - Buscador de Pokemones que consulta la API [PokeAPI](https://pokeapi.co/).
  - Gestión de favoritos usando una API personalizada.
  - Agregar y remover Pokemones de la lista de favoritos.
  - Persistencia de la lista de favoritos por usuario.

### 3. React Wordle
- Implementación del juego Wordle con soporte multilenguaje:
  - El jugador tiene 6 intentos para adivinar una palabra de 5 letras.
  - Resaltado de letras correctas, incorrectas y mal ubicadas.
  - Persistencia del estado del juego por idioma en `localStorage`.

### 4. Video Feed
- Aplicación para crear y sincronizar una lista de videos de YouTube:
  - Reproductor de video usando la librería `react-player`.
  - Sincronización de estado de reproducción entre múltiples videos.
  - Persistencia de la lista de videos en `localStorage`.

## Internacionalización (i18n)
La aplicación soporta dos idiomas: **Inglés (US)** y **Español (ES)**. El usuario puede seleccionar el idioma desde la cabecera, y la traducción se implementa manualmente usando archivos JSON.

## Instalación y Configuración
Abre la terminal y ejecuta los siguientes comandos para clonar y correr el repositorio en tu máquina local:

```bash
git clone  git@github.com:TatianaAriasOrozco/MiniReactLab.git
cd MiniReactLab
npm install
npm run dev


