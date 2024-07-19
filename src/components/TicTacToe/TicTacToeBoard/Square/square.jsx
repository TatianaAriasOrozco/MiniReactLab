import styles from "./styles.module.css"
import { useState } from "react";

export default function Square({ value, onSquareClick }) {

    return <button
        className={styles.square}
        onClick={onSquareClick}>{value}</button>;
}