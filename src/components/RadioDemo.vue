<template>
  <h1>Radio 单选框</h1>
  <hr>
  <h2>基本单选框</h2>
  <Radio label="1">选项1</Radio>
  <h2>不可用状态</h2>
  <Radio label="3" disabled>不可点</Radio>
  <h2>组合按钮</h2>
</template>

<script lang="ts">
import Radio from '../lib/Radio.vue';

export default  {
  components: {Radio},
}
</script>
