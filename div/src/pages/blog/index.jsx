//文章 blog
import React from 'react';
import Head from 'next/head';
import Headers from '@/hook/Headers'
import Footers from '@/hook/Footers'
export default function archives() {
    return (
        <>
            <Head>
                <link rel="icon" href="favicon.ico" />
                <title>无限进步-文章</title>
                <meta name="description" content="无限进步" />
                <meta name="description" content="皮喆" />
                <meta name="description" content="皮喆博客" />
                <meta name="description" content="pizhecode" />
            </Head>

            <Headers></Headers>
            文章 blog
            <Footers></Footers>
        </>
    )
}
