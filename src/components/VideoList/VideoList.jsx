const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <a href={video.link}>Link video- </a>
          <button type="button" onClick={() => onSelect(video.link)}>
            Play
          </button>
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
