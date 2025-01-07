import React from 'react';
import { Collapse } from 'antd';
  const items = [
    {
      key: '1',
      label: '最喜欢的动漫 📺',
      children: '天气之子',
    },
    {
      key: '2',
      label: '最喜欢💓',
      children: '天野阳菜',
    },
    {
      key: '3',
      label: '自我介绍💢',
      children: `Hi, I'm Pizhe! I am an amateur independent full stack development engineer.I'm always excited to explore new tools and techniques to enhance my skills.Infinite progress, growing together with like-minded partners.Have an amazing day!`,
    }
    
  ];
const PizheHook = () => {
    return (
     <div className='PizheHook'>
        <div className='Center'>
            <div className='touxiang'><img src="img/pizhe.jpg" alt="" /></div>
            <div className='piName'>皮喆</div>
            <div className='piTip'>无限进步</div>
            <div className='piIcon'>
                <ul>
                    <li><a href="https://github.com/pizhecode" target="_blank"><img src="image/icon/github.png" alt=""/></a></li>
                    <li><a href="https://music.163.com/#/user/home?id=3953822737" target="_blank"><img src="image/icon/163.png" alt="" /></a></li>
                    <li><a href="https://space.bilibili.com/3461571462302351" target="_blank"><img src="image/icon/bilibili.png" alt="" /></a></li>
                </ul>
            </div>
            <div>
                 <Collapse items={items} bordered={false}/> 
            </div>
        </div>
    </div>
    )
};

export default PizheHook;

