import React, { Suspense } from 'react'
import RootRouter from './router/RootRouter'
import { Button, ConfigProvider } from 'antd';
export default function App() {
  return (
    // <div>
    //   {/* antd全局配置样式主题代码
    //   <ConfigProvider
    //     theme={{
    //       token: {
    //         colorPrimary: '#001d66',
    //       },
    //     }}
    //   >
    //     <Button type="primary">Button</Button>
    //   </ConfigProvider> */
    //   }
    // </div>
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ffa940',
          },
        }}
      >
        <RootRouter></RootRouter>
      </ConfigProvider>

    </div>
  )
}
