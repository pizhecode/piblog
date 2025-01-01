//朋友 friends
import React from 'react';
import Head from 'next/head';
import Headers from '@/hook/Headers'
import Footers from '@/hook/Footers'
export default function friends() {
    return (
        <>
            <Head>
                <link rel="icon" href="favicon.ico" />
                <title>无限进步-朋友</title>
                <meta name="description" content="无限进步" />
                <meta name="description" content="皮喆" />
                <meta name="description" content="皮喆博客" />
                <meta name="description" content="pizhecode" />
            </Head>


            <Headers></Headers>
           朋友 friends
           <Footers></Footers>
        </>
    )
}
