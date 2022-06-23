import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    opened: false,
    options: null,
  }),
});