<template>
  <div>
    <h1>Button 按钮</h1>
    <hr>
    <p>按钮主要用于传递用户点击后触发的操作</p>
    <h2>基础按钮</h2>
    <p>基础按钮分为6种：主要按钮、次要按钮、成功按钮、危险按钮、链接和文本。</p>
    <Demo :component="Button1Demo"/>
    <h2>不同尺寸按钮</h2>
    <p>按钮提供大、正常、小3种尺寸，可通过 size 属性配置。若不设置 size 则默认为正常按钮。</p>
    <Demo :component="Button2Demo"/>
    <h2>不可用状态按钮</h2>
    <p>添加 disabled 禁用按钮。</p>
    <Demo :component="Button4Demo"/>
    <h2>加载中按钮</h2>
    <p>可通过添加 loading 属性，使按钮处于加载中状态。</p>
    <Demo :component="Button5Demo"/>
    <div class="button-attributes">
      <h2>Button 参数</h2>
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
          <td>theme</td>
          <td>按钮类型</td>
          <td>String</td>
          <td>main / default / success / danger / link / text</td>
          <td>default</td>
        </tr>
        <tr>
          <td>size</td>
          <td>按钮大小</td>
          <td>String</td>
          <td>small / normal / big</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>Boolean</td>
          <td>false / true</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>按钮载入状态</td>
          <td>Boolean</td>
          <td>false / true</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">

import Button from '../lib/Button.vue';
import Demo from './Demo.vue';
import Button1Demo from './Button1Demo.vue';
import Button2Demo from './Button2Demo.vue';
import Button4Demo from './Button4Demo.vue';
import Button5Demo from './Button5Demo.vue';

export default {
  components: {Demo, Button},
  setup() {
    return {Button1Demo, Button2Demo, Button4Demo, Button5Demo};
  }
};
</script>

<style lang="scss" scoped>
@import "src/helper.scss";
p{
  color: $font-color;
  margin: 10px 0;
}
h2{
  font-weight: bold;
}
</style>