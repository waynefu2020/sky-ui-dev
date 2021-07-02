<demo>函数式调用</demo>

<template>
  <Button @click="showDialog">一键打开</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {Button, Dialog},
  setup() {
    const showDialog = ()=>{
      openDialog({
        title:'自定义标题',
        content:'自定义内容',
        ok(){console.log('ok');},
        cancel(){console.log('cancel');}
      })
    }
    return {showDialog}
  }
};
</script>