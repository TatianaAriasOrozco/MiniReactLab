# React Mini-Projects Portfolio

This project is a portfolio of mini-projects developed with **React**. The portfolio includes a series of small applications with different functionalities. Each project within this portfolio is designed to enhance React skills and comes with additional features such as internationalization and data persistence.  
The project was developed in July 2024 as an assignment for the intensive web development bootcamp at Codeable, in collaboration with two teammates. The working methodology involved assigning "issues" on a Kanban board, allowing each team member to contribute significantly to the successful delivery of the project.

## Included Projects

### 1. ReactDev Tic-Tac-Toe
- A classic Tic-Tac-Toe game enhanced with additional features:
  - Custom CSS styles based on a design in Figma.
  - Reset button to restore the game to its initial state.
  - Winning line highlighted in green.
  - Draw message if there is no winner.
  - Game state persistence using `localStorage`.

### 2. Poke Collection
- An application to search and manage a collection of Pokémon:
  - User identification and username persistence in `localStorage`.
  - Pokémon search powered by the [PokeAPI](https://pokeapi.co/).
  - Manage favorites using a custom API.
  - Add and remove Pokémon from the favorites list.
  - Persistence of the favorites list by user.

### 3. React Wordle
- A Wordle game implementation with multi-language support:
  - The player has 6 attempts to guess a 5-letter word.
  - Highlighting of correct, incorrect, and misplaced letters.
  - Game state persistence by language in `localStorage`.

### 4. Video Feed
- An application to create and synchronize a YouTube video feed:
  - Video player using the `react-player` library.
  - Synchronization of playback state between multiple videos.
  - Persistence of the video list in `localStorage`.

## Internationalization (i18n)
The application supports two languages: **English (US)** and **Spanish (ES)**. Users can select the language from the header, and the translation is implemented manually using JSON files.

## Installation and Setup
Open your terminal and run the following commands to clone and run the repository on your local machine:

```bash
git clone git@github.com:TatianaAriasOrozco/MiniReactLab.git
cd MiniReactLab
npm install
npm run dev
