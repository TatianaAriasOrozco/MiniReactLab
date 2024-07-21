import styles from '../VideoFeed/VideoFeed.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useRef, useState } from 'react';
import Player from './Player/Player';

const VideoFeed = () => {

  const [listVideo, setListVideo] = useLocalStorage('listVideo', []);
  const inputUrl = useRef();

  const handleUrl = () => {
    setListVideo([inputUrl.current.value, ...listVideo]);
  }

  return (
    <div>
      <div className={styles.inputContainerVideo}>
        <h2 className={styles.titleYoutube}> Youtube URL</h2>
        <input
          type="text"
          placeholder="https://www.youtube.com/watch?v=v1De0Id"
          className={styles.input}
          ref={inputUrl}
        />
        <button className={styles.addButton} onClick={handleUrl}>Add Video</button>
      </div>
      <p className={styles.noVideosText}>No videos yet</p>
      <div>
        {listVideo.map((url) => (
          <Player
            key={crypto.randomUUID()}
            url={url}
          />
        ))}
      </div>

    </div>
  );
};

export default VideoFeed;
