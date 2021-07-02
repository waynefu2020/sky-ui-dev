<template>
  <div class="demo">
    <!--    <h2>{{component.__sourceCodeTitle}}</h2>-->
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <div @click="toggleCode" v-if="codeVisible">隐藏代码</div>
      <div @click="toggleCode" v-else>查看代码</div>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>
  </div>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism-coy.css';
import Button from '../lib/Button.vue';
import {computed, ref} from 'vue';
const Prism = (window as any).Prism;
export default {
  components:{Button},
  props:{
    component: Object
  },
  setup(props){
    const html = computed(()=>{
      return Prism.highlight(props.component.__sourceCode,
          Prism.languages.html,'html')
    })
    const codeVisible = ref(false)
    const toggleCode = ()=>{
      codeVisible.value = !codeVisible.value
    }
    return {Prism, html, codeVisible,toggleCode}
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
$font-color:#2c405a;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 18px;
    color: $font-color;
    font-weight: bold;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    font-size: 14px;
    border-top: 1px dashed $border-color;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #fafbfc;
    color: #C5D9E8;

    &:hover{
      color: #6190e8;
    }
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>