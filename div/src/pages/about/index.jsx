//关于我 about
import React from 'react';
import Head from 'next/head';
import Headers from '@/hook/Headers'
import Footers from '@/hook/Footers'

import PizheHook from '@/hook/PizheHook'
import APlayerHook from '@/hook/APlayer'
import URLDemo from '@/hook/URLDemo'
export default function about() {
    return (
        <div className='AboutDemo'>
            <Head>
                <link rel="icon" href="favicon.ico" />
                <title>无限进步-关于我</title>
                <meta name="description" content="无限进步" />
                <meta name="description" content="皮喆" />
                <meta name="description" content="皮喆博客" />
                <meta name="description" content="pizhecode" />

            </Head>
            <Headers></Headers>
            <div>

            </div>
            <div className='AboutMainCenter'>
                <div className='left'>
                    <PizheHook></PizheHook>
                </div>
                <div className='right'>
                    <div className='name'>英俊潇洒小俊俊</div>
                    <div>
                        <APlayerHook></APlayerHook>
                    </div>
                    <div className='AboutME'>
                        <h3>目前可以公开的情报</h3>
                        <ul>
                            <li>M E：我一般说自己是“修电脑的”</li>
                            <li>目标：把全世界溜一遍</li>
                            <li>爱好：骑行、写Bug、看动漫</li>
                        </ul>
                    </div>
                    <div className='AboutME2'>
                        <h3>我 & 博客</h3>
                        <ul>
                            <li>生性只对感兴趣的事物充满热情，看到有趣的软件都会情不自禁地分析一波技术栈，可能用到了什么 algorithm，然后自我陶醉😅</li>
                            <li>喜欢安静，但喜欢听得劲的电音，节奏控，coding 时喜欢听嗨歌，没事就跟着摇一摇🎵</li>
                            <li>博客源码、部署相关疑难杂症请在 <URLDemo url={'https://github.com/pizhecode'} name={'GitHub'}></URLDemo> 提 issue</li>
                            <li>博客主要技术栈为：<URLDemo name={'React18'}></URLDemo> +  <URLDemo name={'Golang'}></URLDemo></li>
                            <li>因为有很多砖要搬，所以回复只能随缘</li>
                            <li className='ysjf'>
                                <img src="image/icon/bilibili.png" alt="" />
                                买这个域名纯粹是因为B站UP主&nbsp; <URLDemo url={'https://space.bilibili.com/946974#/'} name={'影视飓风'}></URLDemo>
                            </li>
                            <li className='wxjb'>
                                <img src="image/icon/wxjb.png" alt="" />
                            </li>
                            <li>梦想可以大，但第一步总是小！</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footers></Footers>

        </div>
    )
}