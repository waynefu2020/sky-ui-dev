<demo>尺寸展示</demo>
<template>
  <div>
    <Button size="big">大按钮</Button>
    <Button>正常按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '../lib/Button.vue'

export default{
  components:{Button}
}
</script>
