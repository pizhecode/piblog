import { useEffect } from 'react';
// import Head from 'next/head';
import 'aplayer/dist/APlayer.min.css';
const Player = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 只有在客户端执行这段代码
      const APlayer = require('aplayer');

      // 确保字幕文件和音乐文件都正确
      const player = new APlayer({
        element: document.getElementById('aplayer'),
        music: [
          {
            title: '前前前世 (movie ver.)',
            author: 'RADWIMPS《君の名は》',
            url: 'music/前前前世 (movie ver.).m4a',
            pic: 'http://p1.music.126.net/sSxbRt9RpC6s_MaewyDJfA==/18597139672292692.jpg?param=130y130',
            lrc: 'music/前前前世 (movie ver.).lrc',
            theme: '#ebd0c2'
          }
        ],
        lrcType: 3 // 设置为3表示启用歌词显示
      });
    }
  }, []);

  return (
    <>
      {/* <Head>
        <link rel="stylesheet" href="aplayer/dist/APlayer.min.css" />
      </Head> */}
      <div id="aplayer" />
    </>
  );
};

export default Player;
