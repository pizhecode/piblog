import React from 'react';
import { ConfigProvider } from 'antd';
import './index.scss'; // 引入全局样式

const App = ({ Component, pageProps }) => {
  return (
    <ConfigProvider theme={{
      components: {
        Tabs: {
          /* 这里是你的组件 token */
          itemSelectedColor: '#fa901a',
          inkBarColor: '#fa901a',
          horizontalItemGutter:45
        },
      },
    }}>
      <Component {...pageProps} />
    </ConfigProvider>

  );
};

export default App;



