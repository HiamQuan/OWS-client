import {AutoComplete, Col, Form, Row, Select} from 'antd';
import axios from 'axios';
import {useEffect, useState} from 'react';
import * as S from './styled';
import './index.css';

const {Option} = Select;

const options = [
  {
    value: 'Nguyen Anh Quan',
  },
  {
    value: 'Le Quang Vinh',
  },
  {
    value: 'Kieu Van Chuong',
  },
];

const DemoClass = () => {
  const [slots, setSlots] = useState<any[]>([]);
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    (async () => {
      const {data} = await axios.get('http://localhost:5000/v1/slots/');
      setSlots(data);
    })();
    (async () => {
      const {data}: any = await axios.get(
        'http://localhost:5000/v1/orders/631c5569ebebacb2bdce7d2b'
      );
      form.setFieldsValue(data);
    })();
  }, []);
  return (
    <S.Wraper>
      <S.TitleReg level={3}>Tạo lớp ngay bây giờ</S.TitleReg>
      <Col>
        <Form onFinish={onFinish} autoComplete="off" form={form}>
          <Col>
            <S.LabelCustom>Tên học sinh</S.LabelCustom>
            <S.FormCustom name="studentName">
              <S.InputCustom style={{width: '87%'}} disabled />
            </S.FormCustom>
          </Col>

          <Row gutter={24}>
            <Col span={4}>
              <S.LabelCustom htmlFor="">Quốc Gia</S.LabelCustom>
              <S.FormCustom name="">
                <S.SelectCustom defaultValue="+84" disabled>
                  <Option value="86">+86</Option>
                  <Option value="87">+87</Option>
                </S.SelectCustom>
              </S.FormCustom>
            </Col>

            <Col span={17}>
              <S.LabelCustom htmlFor="">Số điện thoại của Ba mẹ</S.LabelCustom>
              <S.FormCustom name="phone">
                <S.InputCustom style={{width: '100%'}} disabled />
              </S.FormCustom>
            </Col>
          </Row>

          <Col>
            <S.LabelCustom>Trẻ học lớp</S.LabelCustom>
            <S.FormCustom name="studentGrade">
              <S.InputCustom style={{width: '100%'}} disabled />
            </S.FormCustom>
          </Col>

          <Col>
            <S.LabelCustom>Teacher</S.LabelCustom>
            <S.FormCustom
              name="teacher"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên giáo viên!',
                },
              ]}
            >
              <AutoComplete
                options={options}
                placeholder="Nguyen Anh Quan"
                filterOption={(inputValue: any, option: any) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              >
                <S.InputCustom />
              </AutoComplete>
            </S.FormCustom>
          </Col>

          <Col>
            <S.LabelCustom>Link class</S.LabelCustom>
            <S.FormCustom name="link">
              <S.InputCustom placeholder="https://...." />
            </S.FormCustom>
          </Col>

          <Col>
            <S.LabelCustom>Khung giờ</S.LabelCustom>
            <S.FormCustom name="schedule">
              <S.SelectCustom widthEl={'150px'}>
                {slots.map((item: any) => (
                  <Option key={item._id} value={item._id}>
                    {item.text}
                  </Option>
                ))}
              </S.SelectCustom>
            </S.FormCustom>
          </Col>

          <S.ButtonCustom htmlType="submit">Tạo lớp Demo</S.ButtonCustom>
        </Form>
      </Col>
    </S.Wraper>
  );
};

export default DemoClass;
