import React from 'react';
import Card from "../components/Card/Card";
import styles from '../App.module.css';
import pokeapiLogo from '../assets/pokeapi.png';
import tictactoeLogo from '../assets/tictactoe.png';
import wordleLogo from '../assets/wordle.png';
import youtubeLogo from '../assets/youtube.png';

function PaginaPrincipal() {
    return (
        <div className={styles.appContainer}>
            <Card
                image={tictactoeLogo}
                title="ReactDev Tic-Tac-Toe"
                buttons={["useState", "useEffect", "Custom Hooks", "localStorage", "CSS Modules", "otherFeature"]}
            />
            <Card
                image={pokeapiLogo}
                title="Poke Collection"
                buttons={["useState", "useEffect", "Custom Hooks", "localStorage", "CSS Modules", "otherFeature"]}
            />
            <Card
                image={wordleLogo}
                title="React Wordle"
                buttons={["useState", "useEffect", "Custom Hooks", "localStorage", "CSS Modules", "otherFeature"]}
            />
            <Card
                image={youtubeLogo}
                title="Video Feed"
                buttons={["useState", "useEffect", "Custom Hooks", "localStorage", "CSS Modules", "otherFeature"]}
            />
        </div>
    );
}

export default PaginaPrincipal;