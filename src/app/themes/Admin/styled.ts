import styled from '@/app/styles/styled-components';
import Sider from 'antd/lib/layout/Sider';
import {Header} from 'antd/lib/layout/layout';
import {Layout} from 'antd';
import Search from 'antd/lib/input/Search';

export const Wrapper = styled.div``;

export const WrapSider = styled(Sider)`
  background-color: ${({theme}) => theme.color.bgWhite};
  border-right: 1px solid ${({theme}) => theme.color.borderColor};
  & .ant-menu {
    overflow: hidden;
    background-color: ${({theme}) => theme.color.bgWhite};
    padding-top: 20px;
    border-top: 1px solid ${({theme}) => theme.color.borderColor};
    &-item {
      padding: 26px 20px;
      margin-left: 20px !important;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
      color: ${({theme}) => theme.color.textColor};
      &:hover {
        background-color: ${({theme}) => theme.color.primary};
        opacity: 0.7;
      }
    }
  }
`;
export const WrapHeader = styled(Header)`
  background-color: ${({theme}) => theme.color.bgWhite};
  & .ant-layout-header {
    background-color: ${({theme}) => theme.color.bgWhite} !important;
  }
`;
export const WrapLayout = styled(Layout)`
  min-height: 100vh;
`;
export const HeaderUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperSearch = styled(Search)`
  width: 300px;
  & .ant-input {
    padding: 8px 10px;
    border-radius: 12px;
  }
  & .ant-input-search-button {
    border-radius: 0 12px 12px 0 !important;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;
