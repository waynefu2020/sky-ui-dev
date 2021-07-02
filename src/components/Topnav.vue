<template>
  <div class="topNav">
    <router-link to="/" class="logo" >
      <img src="../assets/logo.png" alt="">
    </router-link>
    <ul class="menu">
      <li>
        <a href="https://github.com/waynefu2020/sky-ui-1">
          <svg class="icon">
            <use xlink:href="#icon-github"></use>
          </svg>
          Github
        </a>
      </li>
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props:{
    toggleMenuButtonVisible:{
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  }
};
</script>

<style lang="scss" scoped>
$color: #397ce5;

.topNav {
  color: white;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 7em;
    margin-right: auto;
    margin-left: 16px;
    z-index: 20;
    >img{
      position: absolute;
      width: 60px;
      height: 60px;
      top: 4px;
      left: 20px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 4px;
      padding-right: 10px;
    }
  }
  > .toggleAside{
    width: 28px;
    height: 28px;
    position: absolute;
    left: 4%;
    top: 90%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      display: none;
    }
    > .toggleAside{
      display: inline-block;
    }
    >.nav{
      display: none;
    }
  }
}
</style>