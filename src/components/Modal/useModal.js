import { storeToRefs } from 'pinia'
import { useModalStore } from './store'
import { markRaw } from 'vue';

export const useModal = () => {
  const { opened, options } = storeToRefs(useModalStore());

  const open = (_options) => {
    options.value = markRaw({ ...options.value, ..._options });
    opened.value = true;
  }

  const close = () => {
    opened.value = false;
  }

  return {
    open,
    close,
    opened,
    options,
  }
}