import {http} from '@/utils/httpOption';
import {ISlotModel} from './models/Slot.model';

class SlotService {
  createSlot(data: ISlotModel) {
    return http.post<ISlotModel>('slots', data);
  }
  getAllSlots() {
    return http.get<ISlotModel[]>('slots');
  }
  getOneSlot(id: string) {
    return http.get<ISlotModel>(`slots/${id}`);
  }
  removeSlot(id: string) {
    return http.delete<ISlotModel>(`slots/${id}`);
  }
  updateSlot(data: any) {
    return http.put<ISlotModel>(`slots/${data.id}`, data);
  }
}

export default new SlotService();
