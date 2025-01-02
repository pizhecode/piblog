import React from 'react';
import { Collapse } from 'antd';
  const items = [
    {
      key: '1',
      label: '最喜欢的动漫 📺',
      children: '天气之子、轻音少女',
    },
    {
      key: '2',
      label: '最喜欢我的女孩子们 😍',
      children: '天野阳菜、平泽唯、樱岛麻衣、时崎狂三、和泉纱雾',
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
                 <Collapse items={items} bordered={false} defaultActiveKey={['1']} /> 
            </div>
        </div>
    </div>
    )
};

export default PizheHook;

