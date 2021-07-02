<template>
  <div class="layout">
    <Topnav class="nav" :toggleMenuButtonVisible="true"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>快速开始</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">快速上手</router-link>
          </li>
        </ol>
        <h2>组件</h2>
        <ol>
          <li>
            <router-link to="/doc/input">Input 输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹窗</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">

import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    return {menuVisible}
  }
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
.layout{
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;


  > .nav{
    flex-shrink: 0;
    background: white;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
  }
  > .content{
    background: white;
    flex-grow: 1;
    padding-top: 20px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
  .content{
    display: flex;

    > aside{
      flex-shrink: 0;
    }
    > main{
      height: 100vh;
      flex-grow: 1;
      padding-left: 60px;
      padding-right: 60px;
      padding-top: 124px;
      background: white;
    }
  }
  aside {
    background: white;
    width: 180px;
    padding: 70px 0 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: $aside-index;
    border-right: 1px solid #ECECEC;

    > h2 {
      margin-bottom: 4px;
      padding: 0 16px;
      font-size: 22px;
    }

    > ol {
      line-height: 26px;
      > li {
        >a{
          position: relative;
          display: block;
          padding: 4px 16px;
          text-decoration: none;
        }
        .router-link-active{
          background: #ddf1ff;
          border-left: 3px solid #0d92ff;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
  }
  main{
    overflow: auto;
  }
}

</style>