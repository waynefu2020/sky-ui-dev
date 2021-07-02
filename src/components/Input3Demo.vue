<demo>不同尺寸</demo>
<template>
  <Input v-model="inputValue3" placeholder="大尺寸" size="large"/>
  <Input v-model="inputValue3" placeholder="正常尺寸"/>
  <Input v-model="inputValue3" placeholder="小尺寸" size="small"/>
</template>

<script lang="ts">
import {ref} from 'vue';
import Input from '../lib/Input.vue';

export default {
  components:{Input},
  setup(){
    const inputValue3 = ref('')
    return {Input, inputValue3}
  }
}
</script>