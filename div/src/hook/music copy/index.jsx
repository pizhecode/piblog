import css from './Music.module.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import Head from 'next/head';
import Headers from '@/hook/Headers'
import Footers from '@/hook/Footers'
import PizheHook from '@/hook/PizheHook'
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>无限进步-网站导航</title>
        <meta name="description" content="无限进步" />
        <meta name="description" content="皮喆" />
        <meta name="description" content="皮喆博客" />
        <meta name="description" content="pizhecode" />
      </Head>
      <Headers></Headers>
      <div className={css.URLDemo}>
        <div className={css.left}>
        <PizheHook></PizheHook>
        </div>
        <div className={css.right}>
       
        </div>
      </div>
      <Footers></Footers>
    </>

  );
}
