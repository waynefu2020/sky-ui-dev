<template>
  <div>
    <h1>Dialog 弹窗</h1>
    <hr>
    <h2>基础弹窗</h2>
    <p>弹窗可自定义标题和内容，同时有遮罩层可以打开和关闭。</p>
    <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
    <div class="dialog-attributes">
      <h2>Dialog 参数</h2>
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
          <td>visibility</td>
          <td>展示对话框</td>
          <td>Boolean</td>
          <td>false / true</td>
          <td>false</td>
        </tr>
        <tr>
          <td>closeOnClickOverlay</td>
          <td>点击遮罩是否关闭 Dialog</td>
          <td>Boolean</td>
          <td>false / true</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>content</td>
          <td>自定义内容</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>自定义标题</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Dialog1Demo from './Dialog1Demo.vue';
import Dialog2Demo from './Dialog2Demo.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo, Dialog1Demo},
  setup(){
    return {Dialog1Demo,Dialog2Demo}
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
  font-weight: bold;
}
</style>
