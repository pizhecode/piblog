import React from 'react';
import Head from 'next/head';
import { Button, Result } from 'antd';
import { useRouter } from 'next/router';
const App = () => {
    const router = useRouter();
    const btnGoIndex = () => { router.push('/'); };
    return (
        <>
            <Head>
                <link rel="icon" href="favicon.ico" />
                <title>无限进步-关于我</title>
                <meta name="description" content="无限进步" />
                <meta name="description" content="皮喆" />
                <meta name="description" content="皮喆博客" />
                <meta name="description" content="pizhecode" />
            </Head>
            <Result
                status="404"
                title="404"
                subTitle="对不起，您访问的页面不存在。"
                extra={<Button type="primary" onClick={btnGoIndex}>回到首页</Button>}
            />
        </>
    )
}
export default App;