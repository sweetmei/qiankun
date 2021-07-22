import { transRoutes } from '@/utils/utils';
import BasicLayout from '@ant-design/pro-layout';
import React from 'react';
import { KeepAlive, Provider } from 'react-keep-alive';
import { MicroAppWithMemoHistory } from 'umi';
import allRoutes from '../../config/routes';
console.log(13213)
function MicroAppLayout(props) {
  console.log('走进来没有')
    const targetMicro = transRoutes(allRoutes[0].routes, props.location.pathname)
    console.log(targetMicro,'===>targetMicro')
  return  <Provider>
  <KeepAlive name={props.location.pathname}>
    {
        targetMicro ?  <MicroAppWithMemoHistory name={targetMicro} url={props.location.pathname}/> : 
        <BasicLayout></BasicLayout>
    }
  </KeepAlive>
</Provider>
}

export default MicroAppLayout;
