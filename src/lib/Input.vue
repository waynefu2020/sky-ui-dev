<template>
  <div class="sky-input" >
    <input class="sky-input-inner" :class="inputClasses" type="text" :value="value"
           :placeholder="placeholder" :disabled="disabled"
           @input="handleInput($event.target.value)"
    >
  </div>
</template>

<script lang="ts">
import Vue, {computed, ref} from 'vue';

export default {
  props:{
    value:{
      type: String,
    },
    placeholder:{
      type: String,
    },
    disabled:{
      type: Boolean
    },
    status:{
      type: String,
      default: 'input'
    },
    size: {
      type: String,
      default: 'normal'
    },
  },
  setup(props, context){
    const {size, status} = props;
    const message = ref('');
    const inputClasses = computed(()=>{
      return {
        [`sky-status-${status}`]: status,
        [`sky-size-${size}`] : size
      }
    })
    const handleInput = (event)=>{
      context.emit('update:input', event)
    }
    return {message,handleInput, inputClasses}
  }
}
</script>

<style lang="scss">
.sky-input{
  outline: none;
  width: 200px;
  margin: 14px 2px;

  &-inner{
    color: #595959;
    display: block;
    background: white;
    padding: 8px 12px;
    border: 1px solid #c5d9e8;
    border-radius: 4px;
    font-size: 12px;
    transition: border .2s;
    &:focus{
      outline: none !important;
      border:1px solid #0d92ff;
    }

    &:hover{
      border:1px solid #0d92ff;
    }
    &:disabled{
      cursor: not-allowed;
      background: #f7f7f7;
      border: 1px solid #ececec;
      color: #b1b1b1;
      &:hover{
        border:1px solid #ececec;

      }
    }
    &.sky-status-success{
      border-color: #13ce66;
    }
    &.sky-status-error{
      border-color: #ff4949;
    }
    &.sky-status-warning{
      border-color: #ffc82c;
    }
    &.sky-size-large{
      height: 40px;
    }
    &.sky-size-small{
      height: 24px;
      font-size: 10px;
      padding: 10px 12px;
    }
  }
  ::-moz-placeholder { color: #bfbfbf; }
  ::-webkit-input-placeholder { color:#bfbfbf; }
  :-ms-input-placeholder { color:#bfbfbf; }
}

</style>