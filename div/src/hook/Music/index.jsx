import { useEffect, useRef, useState } from 'react';
import 'aplayer/dist/APlayer.min.css';

const APlayerComponent = () => {
  const aplayerContainer = useRef(null);
  const [isClient, setIsClient] = useState(false);  // To check if we're on the client side

  const loadMusicData = async () => {
    try {
      const response = await fetch('/music/music.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to load music data:', error);
      return [];  // Return an empty array if the fetch fails
    }
  };

  useEffect(() => {
    // Check if we are on the client side before running APlayer code
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    const initPlayer = async () => {
      if (isClient && aplayerContainer.current) {
        const musicData = await loadMusicData();
        // Only initialize APlayer if there is valid music data
        if (musicData.length > 0) {
          const APlayer = (await import('aplayer')).default;
          new APlayer({
            container: aplayerContainer.current,
            listFolded: false,
            listMaxHeight: 90,
            lrcType: 3,
            audio: musicData.map((item) => ({
              name: item.name,
              artist: item.artist,
              url: item.url,
              cover: item.cover,
              lrc: item.lrc,
              theme: '#ebd0c2',
            })),
          });
        } else {
          console.error('No music data available');
        }
      }
    };

    if (isClient) {
      initPlayer();
    }
  }, [isClient]);  // Only initialize APlayer once the component is on the client-side

  return <div ref={aplayerContainer}></div>;
};

export default APlayerComponent;
