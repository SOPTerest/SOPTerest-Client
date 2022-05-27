import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { toastState } from '../stores';
import { ToastMode } from '../types';

export default function useToast() {
  const setToast = useSetRecoilState(toastState);
  const resetToast = useResetRecoilState(toastState);
  const showToast = (message: string, mode: ToastMode) =>
    setToast({ mode: mode, message: message });
  const hideToast = () => {
    setTimeout(() => resetToast(), 1000);
  };

  return { showToast, hideToast };
}
