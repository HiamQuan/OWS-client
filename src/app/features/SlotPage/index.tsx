import {TimePicker} from 'antd';
import moment from 'moment';
import {Helmet} from 'react-helmet-async';
import {useDispatch, useSelector} from 'react-redux';
import * as S from './styled';
import {
  createSlot,
  getAllSlots,
  getOneSlot,
  removeSlot,
  updateSlot,
} from './reducer';
import {
  AiOutlineClockCircle,
  AiOutlineEdit,
  AiFillCloseCircle,
  AiOutlineRollback,
} from 'react-icons/ai';
import {useEffect, useState} from 'react';
import type {Moment} from 'moment';

type SlotPageProps = {};

const SlotPage = (props: SlotPageProps) => {
  const dispatch = useDispatch<any>();
  const slotStore = useSelector((state: any) => state.slot);
  const [valueTime, setValueTime] = useState<[Moment, Moment] | null>();
  const [id, setId] = useState<string>();

  const fomartTime = (time: Date, typeFormat: string) => {
    return moment(time).format(typeFormat);
  };
  const getTime = async (time: any, timeString: [string, string]) => {
    const start = time[0]._d;
    const end = time[1]._d;
    const text = fomartTime(start, 'HH:mm') + ' - ' + fomartTime(end, 'HH:mm');
    if (valueTime) {
      return await dispatch(updateSlot({id: id, text, start, end}));
    }
    await dispatch(createSlot({text, start, end}));
  };
  const removeSlotEl = async (id: string) => {
    try {
      await dispatch(removeSlot(id));
    } catch (error) {}
  };
  const updateSlotEl = async (id: string) => {
    const {payload} = await dispatch(getOneSlot(id));
    setId(id);
    setValueTime([moment(payload.start), moment(payload.end)]);
  };
  const backToRegister = () => {
    setValueTime(null);
  };
  useEffect(() => {
    dispatch(getAllSlots());
  }, []);
  return (
    <S.Wrapper>
      <Helmet>
        <title>Slot Pages</title>
      </Helmet>
      <div>
        <div>{valueTime ? 'Cập nhật slot:' : 'Tạo slot mới:'}</div>
        <TimePicker.RangePicker
          format={'HH:mm'}
          minuteStep={5}
          value={valueTime}
          placeholder={['Giờ bắt đầu', 'Giờ kết thúc']}
          onChange={getTime}
        />
        {valueTime && (
          <S.ButtonBack onClick={backToRegister}>
            Quay lại tạo mới <AiOutlineRollback />
          </S.ButtonBack>
        )}
      </div>
      <S.ListTimeCreated>
        <h4>Danh sách slot: </h4>
        {slotStore &&
          slotStore.listSlots.map((item: any) => (
            <S.ElementTime key={item._id}>
              <AiOutlineClockCircle /> {item.text}
              <AiOutlineEdit onClick={() => updateSlotEl(item._id)} />
              <AiFillCloseCircle onClick={() => removeSlotEl(item._id)} />
            </S.ElementTime>
          ))}
      </S.ListTimeCreated>
    </S.Wrapper>
  );
};

export default SlotPage;
