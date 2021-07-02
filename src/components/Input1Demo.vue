<demo>单行输入框</demo>

<template>
  <Input v-model="inputValue" placeholder="输入点啥试试看"/>
  <Input v-model="inputValue" placeholder="禁用状态" disabled/>
</template>

<script lang="ts">
import {ref} from 'vue';
import Input from '../lib/Input.vue';

export default  {
  components:{Input},
  setup(){
    const inputValue = ref('')
    return {Input, inputValue}
  }
}
</script>