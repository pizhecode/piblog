import React from 'react';
import Link from 'next/link'; // 为了方便管理路由
import { useRouter } from 'next/router';  // 导入 useRouter 钩子
const Header = () => {
  const router = useRouter();  // 获取当前路由信息
  // 判断当前页面是否是当前导航项对应的页面
  const isActive = (path) => router.pathname === path;
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
              <li className={isActive('/') ? 'active' : ''}><Link className='lia' href="/">首页</Link></li>
              <li className={isActive('/archives') ? 'active' : ''}><Link className='lia' href="/archives">归档</Link></li>
              <li className={isActive('/moments') ? 'active' : ''}><Link className='lia' href="/moments">动态</Link></li>
              <li className={isActive('/friends') ? 'active' : ''}><Link className='lia' href="/friends">朋友</Link></li>
              <li className={isActive('/about') ? 'active' : ''}><Link className='lia' href="/about">关于我</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

