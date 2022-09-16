import TitlePage from '@/app/components/TitlePage';
import {Helmet} from 'react-helmet-async';
import * as S from './styled';
import {Checkbox, Tabs} from 'antd';
import AntTable from '@/app/components/Table/AntTable';
type ClassSchedulePagePageProps = {};

const ClassSchedulePagePage = (props: ClassSchedulePagePageProps) => {
  const onChange = (e: any) => {
    console.log(e.target.value);
  };
  const columns: any = [
    {
      title: 'Time Slot',
      width: '23%',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Sunday',
      width: '11%',
      dataIndex: 'age',
      key: 'age',
      render: (age: any) => <Checkbox value={age} onChange={(e: any) => onChange(e)} />,
    },
    {
      title: 'Monday',
      width: '11%',
      dataIndex: 'address',
      key: 'address',
      render: (age: any) => <Checkbox value={age} onChange={(e: any) => onChange(e)} />,
    },
    {
      title: 'Tuesday',
      width: '11%',
      key: 'tags',
      dataIndex: 'tags',
      render: (age: any) => <Checkbox value={age} onChange={(e: any) => onChange(e)} />,
    },
    {
      title: 'Wednesday',
      width: '11%',
      key: 'action',
      render: (age: any) => <Checkbox value={age} onChange={(e: any) => onChange(e)} />,
    },
    {
      title: 'Thursday',
      width: '11%',
      key: 'action',
      render: (age: any) => <Checkbox value={age} onChange={(e: any) => onChange(e)} />,
    },
    {
      title: 'Friday',
      width: '11%',
      key: 'action',
      render: (age: any) => <Checkbox value={age} onChange={(e: any) => onChange(e)} />,
    },
    {
      title: 'Statuday',
      width: '11%',
      key: 'action',
      render: (age: any) => <Checkbox value={age} onChange={(e: any) => onChange(e)} />,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const configTabs = [
    {
      label: `DEMO AVAILABILITY`,
      key: '1',
      children: <TitlePage />,
    },
    {
      label: `CLASS CALENDER`,
      key: '2',
      children: <AntTable columns={columns} dataSource={data} pagination={false} />,
    },
    {
      label: `MARK  LTA`,
      key: '3',
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <S.Wrapper>
      <Helmet>
        <title>Class Schedule</title>
      </Helmet>
      <S.Main>
        <TitlePage />
        <S.MainTab>
          <Tabs defaultActiveKey="2" items={configTabs} />
        </S.MainTab>
      </S.Main>
    </S.Wrapper>
  );
};

export default ClassSchedulePagePage;
