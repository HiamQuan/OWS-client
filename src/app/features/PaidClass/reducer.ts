import {ISlotModel} from '@/app/services/models/Slot.model';
import slotService from '@/app/services/slot.service';
import {createAsyncThunk} from '@reduxjs/toolkit';


export const getAllSlots = createAsyncThunk('slot/getAllSlots', async () => {
  const {data} = await slotService.getAllSlots();
  return data;
});
