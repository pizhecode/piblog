//首页
import React, { useEffect } from 'react';
import Head from 'next/head';
import Headers from '@/hook/Headers'
import Footers from '@/hook/Footers'
import { Button } from 'antd';
import { useRouter } from 'next/router';
const App = () => {
  const router = useRouter();  // 获取当前路由信息
   // 点击图片后跳转到 /index
   const btnGoMore = () => {
    router.push('/about'); // 使用 router.push() 来进行页面跳转
  };
  useEffect(() => {
    // 获取当前页面 URL 中的锚点
    if (window.location.hash === '#short-play') {
      const targetElement = document.getElementById('short-play');
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop, // 滚动到目标元素的顶部
          behavior: 'smooth', // 平滑滚动
        });
      }
    }
  }, []); // 只在组件挂载时运行一次
  return(
    <div className='IndexDemo'>
    <Head>
      <link rel="icon" href="favicon.ico" />
      <title>无限进步-首页</title>
      <meta name="description" content="无限进步" />
      <meta name="description" content="皮喆" />
      <meta name="description" content="皮喆博客" />
      <meta name="description" content="pizhecode" />
    </Head>

    <Headers></Headers>
    <img src="image/banner.png" alt="" style={{ width: '100%' }}/>

    <Footers></Footers>
  </div>
  )
};
export default App;