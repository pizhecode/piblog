//关于我 about
import React from 'react';
import Head from 'next/head';
import Headers from '@/hook/Headers'
import Footers from '@/hook/Footers'

import PizheHook from '@/hook/PizheHook'
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
            <div>
                <div>
                    <PizheHook></PizheHook>
                </div>
            </div>
            <Footers></Footers>
            
        </div>
    )
}