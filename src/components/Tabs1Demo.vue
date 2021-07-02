<demo>基础用法</demo>
<template>
  <Tabs v-model:selected="toggleTab">
    <Tab title="Tab 1">Content of Tab Pane 1</Tab>
    <Tab title="Tab 2">Content of Tab Pane 2</Tab>
    <Tab title="Tab 3">Content of Tab Pane 3</Tab>
  </Tabs>
</template>

<script lang="ts">
import {ref} from 'vue';
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default{
  components: {Tab, Tabs},
  setup(){
    const toggleTab = ref('Tab 1')
    return {toggleTab}
  }
}
</script>

<style lang="scss" scoped>

</style>