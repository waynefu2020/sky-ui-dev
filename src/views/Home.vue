<template>
  <div>
    <div class="topNavAndBanner">
      <Topnav/>
      <div class="banner">
        <img src="../assets/logo.png" alt="">
        <h2>一款轻量级的 Vue 3 UI 组件库</h2>
        <p class="actions">
          <router-link to="/doc" class="start">开始使用</router-link>
          <a href="https://github.com/waynefu2020/sky-ui-2">
            <svg class="icon">
              <use xlink:href="#icon-github"></use>
            </svg>
            Github
          </a>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>

        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>采用了Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-lightweight"></use>
          </svg>
          <h3>轻量化</h3>
          <p>没有其他内部依赖</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-free"></use>
          </svg>
          <h3>免费使用</h3>
          <p>在
            <a href="https://github.com/waynefu2020/sky-ui-2">Github</a>
            上开源
          </p>
        </li>

      </ul>
    </div>
  </div>

</template>

<script lang="ts">

import Topnav from "../components/Topnav.vue";
export default {
  components: {Topnav}
}
</script>

<style lang="scss" scoped>
$blue: #397be9;
$radius: 20px;
$color: #0a9f98;

.topNavAndBanner{
  background: linear-gradient(148deg, rgba(58, 125, 234) 0%,rgba(186, 231, 255) 100% );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features{
  margin: 64px auto;
  padding: 0 16px;

  @media(min-width: 500px) {
    width: 500px;
    >ul{
      justify-content: center;
      >li{
        width: 80%;
      }
    }
  }
  @media (min-width: 800px) {
    width: 800px;
    >ul{
      >li{
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1500px;
    >ul{
      >li{
        width: 24%;
      }
    }
  }
  > ul{
    display: flex;
    flex-wrap: wrap;

    > li{
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
          "icon title"
          "icon text";
      grid-template-columns: 70px auto;
      grid-template-rows: 1fr auto;
      > svg{
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3{
        grid-area: title;
        font-size: 28px;
      }
      >p{
        grid-area: text;
      }
    }
  }

}
.banner{
  color: white;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > img{
    width: 280px;
    height: 280px;
  }
  > h2{
    font-size: 22px;
    font-weight: lighter;
  }
  > .actions{
    a{
      margin: 0 8px;
      background: white;
      color: $blue;
      display: inline-block;
      border-radius: $radius;
      padding: 8px 22px;
      > svg{
        fill: $blue;
      }
      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>