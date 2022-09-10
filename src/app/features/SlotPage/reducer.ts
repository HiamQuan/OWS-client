import {ISlotModel} from '@/app/services/models/Slot.model';
import slotService from '@/app/services/slot.service';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {notification} from 'antd';

type SlotState = {
  listSlots: ISlotModel[];
};

const initialState: SlotState = {
  listSlots: [],
};

export const createSlot = createAsyncThunk(
  'slot/createSlot',
  (data: ISlotModel, thunkAPI) => {
    slotService
      .createSlot(data)
      .then((res: any) => {
        if (res.status === 200) {
          notification.success({message: 'Thêm slot thành công!'});
          thunkAPI.dispatch(getAllSlots());
        }
      })
      .catch((error: any) => {
        notification.error({message: `${error.response.data.message}`});
      });
  }
);
export const getAllSlots = createAsyncThunk('slot/getAllSlots', async () => {
  const {data} = await slotService.getAllSlots();
  return data;
});
export const getOneSlot = createAsyncThunk(
  'slot/getOneSlot',
  async (id: string) => {
    const {data} = await slotService.getOneSlot(id);
    return data;
  }
);
export const removeSlot = createAsyncThunk(
  'slot/removeSlot',
  async (id: string, thunkAPI) => {
    await slotService.removeSlot(id);
    thunkAPI.dispatch(getAllSlots());
  }
);
export const updateSlot = createAsyncThunk(
  'slot/updateSlot',
  async (data: any, thunkAPI) => {
    await slotService.updateSlot(data);
    thunkAPI.dispatch(getAllSlots());
  }
);

const slotSlice = createSlice({
  name: 'slot',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getAllSlots.fulfilled, (state: SlotState, action: any) => {
      state.listSlots = action.payload;
    });
  },
});

export default slotSlice.reducer;
