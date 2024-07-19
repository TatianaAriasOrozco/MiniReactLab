import styles from "../Login/Login.module.css";
import { useRef } from 'react';


const Login = ({ setUserName }) => {
    const inputRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputRef.current.value) return;
        localStorage.setItem('username', inputRef.current.value);
        setUserName(inputRef.current.value);
    }
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>colocar imagen</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label} htmlFor='username'>username</label>
                <input ref={inputRef} className={styles.input} id='username' name='username' type='text' placeholder='some-user' />
                <button className={styles.button} type='submit'>Enter</button>
            </form>
        </main>
    )
}

export default Welcome