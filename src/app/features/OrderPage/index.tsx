import {IOrderModel} from '@/app/services/models/Order.model';
import orderService from '@/app/services/order.service';
import {Col, Form, Radio, Row, Select} from 'antd';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './index.css';
import * as S from './styled';

const {Option} = Select;

const OrderPage = () => {
  const [slots, setSlots] = useState<any[]>([]);
  const onFinish = async (values: IOrderModel) => {
    await orderService.createOrder(values);
    console.log('Received values of form: ', values);
  };
  useEffect(() => {
    (async () => {
      const {data}: any = await axios.get('http://localhost:5000/v1/slots/');
      setSlots(data);
    })();
  }, []);
  return (
    <S.Wraper>
      <S.TitleReg level={3}>
        Đăng kí ngay bây giờ và nhận chứng chỉ hoàn thành
      </S.TitleReg>
      <Col>
        <Form onFinish={onFinish}>
          <Col>
            <S.LabelCustom>Tên học sinh</S.LabelCustom>
            <S.FormCustom name="studentName">
              <S.InputCustom
                style={{width: '87%'}}
                placeholder="VD: Nguyen Van A"
              />
            </S.FormCustom>
          </Col>
          <Row gutter={24}>
            <Col span={4}>
              <S.LabelCustom htmlFor="">Quốc Gia</S.LabelCustom>
              <S.FormCustom name="">
                <S.SelectCustom defaultValue="+84">
                  <Option value="86">+86</Option>
                  <Option value="87">+87</Option>
                </S.SelectCustom>
              </S.FormCustom>
            </Col>

            <Col span={17}>
              <S.LabelCustom htmlFor="">Số điện thoại của Ba mẹ</S.LabelCustom>
              <S.FormCustom
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số điện thoại Ba mẹ!',
                  },
                ]}
              >
                <S.InputCustom style={{width: '100%'}} />
              </S.FormCustom>
            </Col>
          </Row>
          <Col>
            <S.LabelCustom>Trẻ học lớp</S.LabelCustom>
            <S.FormCustom
              name="studentGrade"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn độ cấp độ học của trẻ',
                },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="lớp 1">Lớp 1</Radio.Button>
                <Radio.Button value="lớp 2-3">Lớp 2-3</Radio.Button>
                <Radio.Button value="lớp 4-6">Lớp 4-6</Radio.Button>
                <Radio.Button value="lớp 7-9">Lớp 7-9</Radio.Button>
                <Radio.Button value="lớp 10-12">Lớp 10-12</Radio.Button>
              </Radio.Group>
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
          {/* <Col>
            <S.LabelCustom>
              Bạn có máy tính xách tay/ máy tính để bàn cho việc học
            </S.LabelCustom>
            <Form.Item name="radio-group">
              <Radio.Group>
                <Radio value="yes">Có</Radio>
                <Radio value="no">Không</Radio>
              </Radio.Group>
            </Form.Item>
          </Col> */}
          <S.ButtonCustom htmlType="submit">
            Đăng ký một buổi học miễn phí
          </S.ButtonCustom>
        </Form>
      </Col>
    </S.Wraper>
  );
};

export default OrderPage;
