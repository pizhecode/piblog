import React, { useMemo } from 'react';
import Link from 'next/link'; // 为了方便管理路由
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();  // 获取当前路由信息
  // 点击图片后跳转到首页
  const btnImg = () => {
    router.push('/'); // 使用 router.push() 来进行页面跳转
  };

  return (
    <div className='HeadersDemo'>
      <header className="header">
        <div className="container">
          {/* 左侧 logo */}
          <div className="logo">
            <img src="image/logo.png" alt="logo" onClick={btnImg} />
          </div>
          {/* 右侧导航栏 */}
          <nav className="nav">
            <ul>
              <li><Link className='lia' href="/">首页</Link></li>
              {/* <li><Link className='lia' href="/archives.html">归档</Link></li> */}
              {/* <li><Link className='lia' href="/moments.html">动态</Link></li> */}
              <li><Link className='lia' href="/url.html">URL</Link></li>
              <li><Link className='lia' href="/music.html">音乐</Link></li>
              <li><Link className='lia' href="/about.html">关于我</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
