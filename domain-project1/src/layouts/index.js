import  BasicLayout from '@ant-design/pro-layout';
import complexMenu from './contextMenu'
export default (props) => {
    return <div style={{ padding: 20 }}>
      <BasicLayout route={{
        routes: complexMenu,
      }}></BasicLayout>
      { props.children }
      </div>;
  }