<template>
  <button class="sky-button"
          :class="classes"
          :disabled="disabled">
    <span v-if="loading" class="sky-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`sky-theme-${theme}`]: theme,
        [`sky-size-${size}`]: size,
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$disabled-font: #d2d2d2;
$radius: 4px;
$blue: #428aee;
$red: #f3123e;
$grey: grey;
.sky-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: #428aee;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  @media (max-width: 500px) {
    &.sky-theme-success{
      margin: 10px;
    }
    &.sky-size-small {
      margin-top: 10px;
    }
  }
  & + & {
    margin-left: 8px;
  }


  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
  &.sky-theme-default{
    background: white;
    &:hover, &:focus {
      background: darken(white, 4%);
    }
  }
  &.sky-theme-main{
    color: white;
    border-color: $blue;

    &:hover, &:focus {
      background: darken($blue, 10%);
      border-color: darken($blue, 10%);
    }
  }
  &.sky-theme-success{
    background: #13ce66;
    border-color: #13ce66;
    color: white;
    &:hover,&:focus{
      background: lighten(#13ce66, 2%);
    }
  }
  &.sky-theme-danger {
    background: $red;
    color: white;
    border-color: $red;

    &:hover, &:focus {
      background: darken($red, 10%);
      border-color: darken($red, 10%);
    }
  }
  &.sky-theme-link {
    border: transparent;
    box-shadow: none;
    color: $blue;
    background: transparent;

    &:hover, &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.sky-theme-text {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      color: darken(white, 30%);
    }
  }

  &.sky-size-big {
    font-size: 20px;
    height: 42px;
    padding: 0 16px;
    background: $blue;
    color: white;
    border-color: $blue;
    &:hover, &:focus {
      background: darken($blue, 10%);
      border-color: darken($blue, 10%);
    }
  }

  &.sky-size-small {
    font-size: 12px;
    height: 24px;
    padding: 0 10px;
    background: $blue;
    color: white;
    border-color: $blue;
    &:hover, &:focus {
      background: darken($blue, 10%);
      border-color: darken($blue, 10%);
    }
  }

  &.sky-theme-button {
    &.sky-size-normal {
      color: white;
      border-color: $blue;
      &:hover, &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }

    }
  }

  &.sky-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $disabled-font;
      background: #f7f7f7;
      border-color: rgb(236, 236, 236);

      &:hover {
        background: #f7f7f7;
        border-color: rgb(236, 236, 236);
        cursor: not-allowed;
      }
    }

  }

  &.sky-theme-link, &.sky-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $disabled-font;
    }
  }
  > .sky-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-left: 4px;
    margin-right: 4px;
    border-radius: 8px;
    border-color: white white white transparent;
    border-style: solid;
    border-width: 2px;
    animation: sky-spin 1s infinite linear;
  }
}

@keyframes sky-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(300deg)
  }
}
</style>