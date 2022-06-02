import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { toastState } from '../../../stores';
import useToast from '../../../hooks/useToast';
import CompleteToast from './CompleteToast';

export default function Toast() {
  const toast = useRecoilValue(toastState);
  const { hideToast } = useToast();

  useEffect(() => {
    if (toast.mode) hideToast();
  }, [toast, hideToast]);

  switch (toast.mode) {
    case 'COMPLETE':
      return <CompleteToast />;
    case null:
    default:
      return <></>;
  }
}
