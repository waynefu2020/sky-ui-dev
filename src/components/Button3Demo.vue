<demo>不同level</demo>

<template>
  <div>
    <div>
      <Button level="main">按钮</Button>
      <Button>按钮</Button>
      <Button level="danger">按钮</Button>
    </div>
    <div>
      <Button level="main" theme="link">按钮</Button>
      <Button theme="link">按钮</Button>
      <Button level="danger" theme="link">按钮</Button>
    </div>
    <div>
      <Button level="main" theme="text">按钮</Button>
      <Button theme="text">按钮</Button>
      <Button level="danger" theme="text">按钮</Button>
    </div>
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