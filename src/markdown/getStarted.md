# 开始使用

安装成功后，你的项目中写入下面的代码：

```
import {Button, Tabs, Switch, Dialog} from "sky-ui";

```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
    import {Button, Tabs, Switch, Dialog} from "sky-ui"
    export default {
      components: {Button}
    }
</script>
```
