<demo>基础按钮展示</demo>

<template>
  <div>
    <Button theme="main">主要按钮</Button>
    <Button theme="default">次要按钮</Button>
    <Button theme="success">成功按钮</Button>
    <Button theme="danger">危险按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default  {
  components:{Button}
}
</script>
