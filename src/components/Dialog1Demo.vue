<demo>基础用法</demo>

<template>
  <Button @click="toggle">点击打开</Button>
  <Dialog v-model:visible="visibility" :close-on-click-overlay="false" :ok="confirm" :cancel="cancel">
    <template v-slot:content>
      <div>这里是第一行内容</div>
      <div>这里是第二行内容</div>
    </template>
    <template v-slot:title>
      <strong>自定义标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {ref} from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';

export default {
  components: {Button, Dialog},
  setup() {
    const visibility = ref(false);
    const toggle = () => {
      visibility.value = !visibility.value;
    };
    const confirm = () => {
      return true;
    };
    const cancel = () => {};
    return {visibility, toggle, confirm, cancel};
  }
};
</script>