// import {Outlet} from 'react-router-dom';
import * as S from './styled';
import { AiOutlineDashboard, AiOutlineGroup, AiOutlineSchedule} from 'react-icons/ai';
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai';
import {Layout, Dropdown, Menu, Image, Avatar} from 'antd';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const { Sider, Content} = Layout;

function LayoutAdmin() {
  const [collapsed, setCollapsed] = useState(false);
  const onSearch = (value: string) => console.log(value);
  const dataRenderMenu = [
    {
      key: '1',
      icon: <AiOutlineGroup />,
      label: 'My Classes',
    },
    {
      key: '2',
      icon: <AiOutlineSchedule />,
      label: 'Class Schedule',
    },
    {
      key: '3',
      icon: <AiOutlineDashboard />,
      label: 'Dashboard',
    },
    
  ];
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Logout
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <S.Wrapper>
      <S.WrapLayout>
        <S.WrapSider as={Sider} trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <Link to={'/admin'}>
              <Image
                style={{padding: '12px'}}
                height={64}
                src="https://champs-dashboard.s3.ap-south-1.amazonaws.com/web-assets/logo-vietnam.png"
                preview={false}
              />
            </Link>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={dataRenderMenu}
          />
        </S.WrapSider>
        <Layout>
          <S.WrapHeader
            className="site-layout-background"
            style={{
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: '16px',
              paddingLeft: '8px',
            }}
          >
            {React.createElement(
              collapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
                style: {fontSize: '30px'},
              }
            )}
             <S.WrapperSearch placeholder="Search..." onSearch={onSearch} enterButton />
            <S.HeaderUser>
              <div style={{marginRight: '10px'}}>Nguyen Anh Quan</div>

              <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
                <Avatar style={{color: '#f56a00', backgroundColor: '#fde3cf'}}>
                  N
                </Avatar>
              </Dropdown>
            </S.HeaderUser>
          </S.WrapHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </S.WrapLayout>
    </S.Wrapper>
  );
}

export default LayoutAdmin;
