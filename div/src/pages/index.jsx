//首页
import React, { useEffect } from 'react';
import Head from 'next/head';
import Headers from '@/hook/Headers'
import Footers from '@/hook/Footers'
import PizheHook from '@/hook/PizheHook'
import PizheButton from '@/hook/PizheButton'
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
  const BtnRead = ()=>{
    console.log('点我');
  }
  return (
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
      <div className='AboutMainCenter'>
        <div className='left'>
          <PizheHook></PizheHook>
        </div>
        <div className='right'>
          <div className='title'>2025年度总结</div>
          <div className='information'>
            <ul>
              <li><img src='image/icon/index/time.png'></img><span>2025-01-01</span></li>
              <li><img src='image/icon/index/word.png'></img>字数≈999字</li>
              <li><img src='image/icon/index/read.png'></img>阅读时长≈8分钟</li>
            </ul>
          </div>
          <div className='MainImage'>
            <img src="img/pizhe.jpg" alt="" />
          </div>
          <div className='ButtonRead' onClick={BtnRead}>
              <PizheButton name={'阅读全文'}></PizheButton>
          </div>
        </div>
      </div>
      <Footers></Footers>
     
    </div>
  )
};
export default App;