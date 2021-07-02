<template>
  <div>
    <h1>Switch 开关</h1>
    <hr>
    <p>开关用于表示两种状态之间的切换，switch 更多用于触发后即可改变状态。</p>
    <h2>基础用法</h2>
    <p>状态切换会触发事件。</p>
    <Demo :component="Switch1Demo"/>
    <h2>不可用开关</h2>
    <p>添加属性 disabled 禁用开关按钮。</p>
    <Demo :component="Switch2Demo"/>
    <div class="switch-attributes">
      <h2>Switch 参数</h2>
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
          <td>value</td>
          <td>Switch 状态</td>
          <td>Boolean</td>
          <td>false / true</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Switch1Demo from './Switch1Demo.vue';
import Switch2Demo from './Switch2Demo.vue';

import Demo from './Demo.vue';


export default {
  components: {Demo, Switch},
  setup() {
    return { Switch1Demo, Switch2Demo};
  }
};
</script>

<style lang="scss">
$font-color:#3f536e;
h1{
  font-size: 24px;
  font-weight: bold;
}
h2{
  font-size: 18px;
}
hr{
  margin: 0.8em 0;
  border: 0;
  border-bottom: 1px solid #C5D9E8;
}
p{
  color: $font-color;
}
.attributes-table{
  margin: 18px 0;
  display: block;
  width: 100%;
  background: #fff;
  color: #5e6d82;
  border-collapse: collapse;
  overflow: auto;
  font-size: 14px;

  > thead{
    > tr{
      > th{
        border-bottom: 1px solid #f3f7fa;
        padding: 10px 8px;
        text-align: left;
        border-top: 1px solid #f3f7fa;
        background: #FAFBFC;
      }
    }
  }
  > tbody{
    > tr{
      >td{
        border-bottom: 1px solid #f3f7fa;
        padding: 10px 8px;
      }
    }
  }
}

</style>