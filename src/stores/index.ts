import { atom } from 'recoil';
import { Toast } from '../types';

export const toastState = atom<Toast>({
  key: 'toast',
  default: { mode: null, message: '' },
});
