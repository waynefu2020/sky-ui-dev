<demo>不可用展示</demo>
<template>
  <div>
    <Button disabled>禁用</Button>
    <Button theme="link" disabled>禁用链接</Button>
    <Button theme="text" disabled>禁用文本</Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '../lib/Button.vue'
export default  {
  components:{Button}
}
</script>

<style lang="scss" scoped>

</style>