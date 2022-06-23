<script setup>
import { useModal } from './useModal';

const { close, opened, options } = useModal();


</script>

<template>
  <div v-if="opened">
    <div>
      <header>
        <h4>{{ options.title }}</h4>

        <button @click="close">x</button>
      </header>
      <main>
        <component v-bind="options.props" :is="options.component" />
      </main>
      <footer>
        footer
      </footer>
    </div>
  </div>
</template>