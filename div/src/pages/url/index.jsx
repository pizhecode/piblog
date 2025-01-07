import css from './URL.module.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import Head from 'next/head';
import Headers from '@/hook/Headers'
import Footers from '@/hook/Footers'
import PizheHook from '@/hook/PizheHook'
export default function Home() {
  // 网站数据
  const [sites, setSites] = useState([
    { name: "首页", category: "常用", url: "https://wuxianjinbu.cn", image: "" },
    //邮箱
    { name: "outlook", category: "邮箱", url: "https://outlook.live.com/", image: "https://outlook.live.com//favicon.ico" },
    { name: "163", category: "邮箱", url: "https://mail.163.com/", image: "https://163.com/favicon.ico" },
    { name: "QQ邮箱", category: "邮箱", url: "https://mail.qq.com", image: "https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_96h.png" },
    //工具
    { name: "图片格式转换", category: "工具", url: "http://www.ico8.net/index.php?action=make", image: "" },
    { name: "GPT1", category: "工具", url: "https://chat18.aichatoschat.com/", image: "https://chat18.aichatoschat.com/favicon.ico" },
    { name: "GPT2", category: "工具", url: "http://chat5.aiyunos.top/", image: "https://chat18.aichatoschat.com/favicon.ico" },
    { name: "通义千问", category: "工具", url: "https://tongyi.aliyun.com/qianwen/", image: "https://img.alicdn.com/imgextra/i1/O1CN01AKUdEM1qP6BQVaYhT_!!6000000005487-2-tps-512-512.png" },
    { name: "文心一言", category: "工具", url: "https://yiyan.baidu.com/", image: "https://nlp-eb.cdn.bcebos.com/static/eb/asset/robin.e9dc83e5.png" },
    // { name: "copilot", category: "工具", url: "https://copilot.microsoft.com/", image: "https://copilot.microsoft.com/rp/cgFxt_KTOKfjNNxtm5HS3A13G4I.jpg" },
    { name: "讯飞星火", category: "工具", url: "https://xinghuo.xfyun.cn/desk", image: "https://xhspdup.xfyun.cn/static/media/gpt-logo.e9ad4150a385435f5a90b50c44dad847.svg" },
    { name: "文心一格", category: "工具", url: "https://yige.baidu.com/", image: "https://yige.baidu.com/favicon.png" },
    { name: "PC软件下载", category: "工具", url: "https://pc.qq.com/", image: "https://pc1.gtimg.com/finance/softweb/fav/favicon_32x32.ico" },
    { name: "阿里巴巴图标库", category: "工具", url: "https://www.iconfont.cn/", image: "https://www.iconfont.cn/favicon.ico" },
    { name: "爱给网", category: "工具", url: "https://www.aigei.com/", image: "https://cdn-sqn.aigei.com/assets/site/img/logo/aigei_114-114.png" },
    { name: "免费下载电影", category: "工具", url: "http://www.kkkob.com/apps/index.html?id=211229kl", image: "" },
    // 学习
    { name: "NODEJS国内镜像", category: "学习", url: "https://nodejs.cn", image: "https://img.nodejs.cn/logo.svg" },
    { name: "免费CDN", category: "学习", url: "https://unpkg.com/", image: "https://unpkg.com/favicon.ico" },
    { name: "NPM", category: "学习", url: "https://www.npmjs.cn/", image: "https://www.npmjs.cn/images/favicon.ico" },
    { name: "美叶", category: "学习", url: "https://www.meiye.art", image: "https://icon.meiye.art/favicon.ico" },
    { name: "Uniapp", category: "学习", url: "https://uniapp.dcloud.net.cn", image: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788" },
    { name: "GO语言", category: "学习", url: "https://studygolang.com/dl", image: "https://studygolang.com/static/pkgdoc/index_files/pkg.png" },
    { name: "日期处理类库", category: "学习", url: "http://momentjs.cn", image: "" },
    { name: "web安全色", category: "学习", url: "http://www.bootcss.com/p/websafecolors/", image: "" },
  ]);
  const [filteredSites, setFilteredSites] = useState(sites);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // 搜索过滤
  useEffect(() => {
    const filtered = sites.filter(site =>
      site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSites(filtered);
  }, [searchTerm, sites]);

  // 分类过滤
  useEffect(() => {
    const filtered = selectedCategory === '' ? sites : sites.filter(site => site.category === selectedCategory);
    setFilteredSites(filtered);
  }, [selectedCategory, sites]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // 渲染网站链接
  const renderSites = (sites) => {
    return sites.map(site => {
      const imageUrl = site.image ? (site.image.startsWith('http') ? site.image : '/images/' + site.image) : 'https://s21.ax1x.com/2024/11/04/pAsFmxP.md.jpg';

      return (
        <div key={site.url} className={css.siteItem}>
          <a href={site.url} target="_blank" rel="noopener noreferrer">
            <img src={imageUrl} alt={site.name} />
            <h3>{site.name}</h3>
            <p>{site.category}</p>
          </a>
        </div>
      );
    });
  };

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
        <header>
          <h1>网站导航</h1>
          <form id={css.searchForm}>
            <input
              type="text"
              id={css.searchInput}
              placeholder="按任意键直接开始搜索"
              value={searchTerm}
              onChange={handleSearchInput}
            />
          </form>
        </header>

        <nav>
          <ul>
            <li><button className={css.categoryBtn} onClick={() => handleCategoryClick('')}>全部</button></li>
            <li><button className={css.categoryBtn} onClick={() => handleCategoryClick('常用')}>常用</button></li>
            <li><button className={css.categoryBtn} onClick={() => handleCategoryClick('工具')}>工具</button></li>
            <li><button className={css.categoryBtn} onClick={() => handleCategoryClick('邮箱')}>邮箱</button></li>
            <li><button className={css.categoryBtn} onClick={() => handleCategoryClick('学习')}>学习</button></li>
          </ul>
        </nav>

        <section id={css.siteList}>
          {renderSites(filteredSites)}
        </section>
        </div>
      </div>
      <Footers></Footers>
    </>

  );
}
