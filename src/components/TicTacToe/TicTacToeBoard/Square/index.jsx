import styles from "./styles.module.css"

export default function Square({ value }) {
    return <button className={styles.square}>{value}</button>;
}