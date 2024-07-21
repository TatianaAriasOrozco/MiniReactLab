import ReactPlayer from 'react-player'
import Button from '../../../components/common/Button/Button'
import styles from './player.module.css'
import { useState } from 'react';


export default function Player({ url }) {

    const [isPlaiyng, setIsPlaiyng] = useState(false);
    const [speed, setSpeed] = useState(1)

    return (
        <div>
            <div>
                <ReactPlayer url={url} width={480} height={270} playing={isPlaiyng} onPlay={() => { setIsPlaiyng(true) }} onPause={() => { setIsPlaiyng(false) }} playbackRate={speed} />
            </div>
            <div className={styles.buttonsContainer}>
                <Button onClick={() => { setIsPlaiyng(!isPlaiyng) }}>{isPlaiyng ? 'Pause' : 'Start'}</Button>
                <div>
                    <Button onClick={() => { setSpeed(1) }}>1x</Button>
                    <Button onClick={() => { setSpeed(1.5) }}>1.5x</Button>
                    <Button onClick={() => { setSpeed(2) }}>2x</Button>
                </div>
            </div>
        </div>
    )
}