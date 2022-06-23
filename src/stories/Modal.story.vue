<script setup>
import { defineAsyncComponent } from 'vue';
import { Modal, Button, useModal } from '../components';

const { open: openModal } = useModal();

const openTestModal = () => {
  openModal({
    title: 'Test modal',
    component: defineAsyncComponent(() => import('./TestModal.vue')),
  });
}
</script>

<template>
  <Story title="Modal">
    <Modal/>
    <Button @click="openTestModal">Open modal</Button>
  </Story>
</template>