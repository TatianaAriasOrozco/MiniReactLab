import React, { useState } from 'react';
import Card from "../components/Card/Card";
import styles from '../App.module.css';
import pokeapiLogo from '../assets/pokeapi.png';
import tictactoeLogo from '../assets/tictactoe.png';
import wordleLogo from '../assets/wordle.png';
import youtubeLogo from '../assets/youtube.png';


function PrincipalPage() {
    const [selectedTitle, setSelectedTitle] = useState('');

    const handleCardClick = (title) => {
        setSelectedTitle(title);
        if (title === "ReactDev Tic-Tac-Toe") {
            window.location.href = '/TicTacToe';
        } else if (title === "Poke Collection") {
            window.location.href = "/PokeCollection";
        } else if (title === "React Wordle") {
            window.location.href = '/react-wordle';
        } else if (title === "Video Feed") {
            window.location.href = '/video-feed';
        }
    };
    return (
        <div className={styles.appContainer}>
            <Card
                image={tictactoeLogo}
                title="ReactDev Tic-Tac-Toe"
                buttons={["useState", "useEffect", "Custom Hooks", "localStorage", "CSS Modules", "otherFeature"]}
                onClick={() => handleCardClick("ReactDev Tic-Tac-Toe")}
            />
            <Card
                image={pokeapiLogo}
                title="Poke Collection"
                buttons={["useState", "useEffect", "Custom Hooks", "localStorage", "CSS Modules", "otherFeature"]}
                onClick={() => handleCardClick("Poke Collection")}
            />
            <Card
                image={wordleLogo}
                title="React Wordle"
                buttons={["useState", "useEffect", "Custom Hooks", "localStorage", "CSS Modules", "otherFeature"]}
                onClick={() => handleCardClick("React Wordle")}
            />
            <Card
                image={youtubeLogo}
                title="Video Feed"
                buttons={["useState", "useEffect", "Custom Hooks", "localStorage", "CSS Modules", "otherFeature"]}
                onClick={() => handleCardClick("Video Feed")}
            />
        </div>
    );
}

export default PrincipalPage;