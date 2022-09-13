import { Checkbox,Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import {getAllSlots} from './reducer'

interface DataType {
  text : String,
  start: Date,
  end: Date
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Time slots',
    dataIndex: 'text',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Sunday',
    dataIndex: '',
    render: (record) => {
      return <>
      <Checkbox/>
      </>

    }
  },
  {
    title: 'Monday',
    dataIndex: '',
    render: (record) => {
      return <>
      <Checkbox/>
      </>

    }
  },
  {
    title: 'Tuesday',
    dataIndex:'',
    render: (record) => {
      return <>
      <Checkbox/>
      </>

    }
  },
  {
    title: 'Wednesday',
    dataIndex:'',
    render: (record) => {
      return <>
      <Checkbox/>
      </>

    }
  },
  {
    title: 'Thursday',
    dataIndex:'',
    render: (record) => {
      return <>
      <Checkbox/>
      </>

    }
  },
  {
    title: 'Friday',
    dataIndex:'',
    render: (record) => {
      return <>
      <Checkbox/>
      </>

    }
  },
  {
    title: 'Saturday',
    dataIndex:'',
    render: (record) => {
      return <>
      <Checkbox/>
      </>

    }
  }

];

const data: DataType[] = [

]


function PaidClass(){
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}




      />

    </div>
  );
};

export default PaidClass
