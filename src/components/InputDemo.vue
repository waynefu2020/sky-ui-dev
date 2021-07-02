<template>
  <h1>Input 输入框</h1>
  <hr>
  <h2>单行输入框</h2>
  <p>基本输入框，可自定义输入内容和添加 disabled 属性来禁用输入。</p>
  <Demo :component="Input1Demo"/>
  <h2>带状态的单行输入框</h2>
  <p>可添加 success、error、warning 三种状态，表达不同含义，仅做颜色上的变化。</p>
  <Demo :component="Input2Demo"/>
  <h2>不同尺寸输入框</h2>
  <p>支持 large、normal、small 三种尺寸，默认为 normal。可通过 size 属性设置。</p>
  <Demo :component="Input3Demo"/>
  <div class="input-attributes">
    <h2>Input 参数</h2>
    <table class="attributes-table">
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>type</td>
        <td>输入内容内容（原生）</td>
        <td>String</td>
        <td>-</td>
        <td>text</td>
      </tr>
      <tr>
        <td>value</td>
        <td>绑定的值</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>占位文本（原生）</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用（原生）</td>
        <td>Boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>输入框尺寸大小</td>
        <td>String</td>
        <td>small / normal / large</td>
        <td>normal</td>
      </tr>
      <tr>
        <td>status</td>
        <td>输入框类型</td>
        <td>String</td>
        <td>success / error / warning</td>
        <td>-</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Input1Demo from './Input1Demo.vue';
import Input2Demo from './Input2Demo.vue';
import Input3Demo from './Input3Demo.vue';

export default{
  components:{Demo},
  setup(){
    return {Input1Demo,Input2Demo,Input3Demo}
  }
}
</script>

<style lang="scss">
@import "src/helper.scss";
p{
  color: $font-color;
  margin: 10px 0;
}
h2{
  margin: 20px 0;
  font-weight: bold;
}
</style>