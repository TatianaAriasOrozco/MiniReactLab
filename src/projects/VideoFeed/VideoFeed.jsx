import styles from '../VideoFeed/VideoFeed.module.css';
const VideoFeed = () => {
  return (
    <div>
      <div className={styles.inputContainerVideo}>
        <h2 className={styles.titleYoutube}> Youtube URL</h2>
        <input
          type="text"
          placeholder="https://www.youtube.com/watch?v=v1De0Id"
          className={styles.input}
        />

        <button className={styles.addButton}>Add Video</button>
      </div>
      <p className={styles.noVideosText}>No videos yet</p>

    </div>
  );
};

export default VideoFeed;
