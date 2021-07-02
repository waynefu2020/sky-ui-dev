<demo>带状态的单行输入框</demo>
<template>
  <Input v-model="inputValue2" placeholder="success" status="success"/>
  <Input v-model="inputValue2" placeholder="error" status="error"/>
  <Input v-model="inputValue2" placeholder="warning" status="warning"/>
</template>

<script lang="ts">
import {ref} from 'vue';
import Input from '../lib/Input.vue';
export default {
  components:{Input},
  setup(){
    const inputValue2 = ref('')
    return {inputValue2}
  }
}
</script>