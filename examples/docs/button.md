# Button 按钮

## 基础用法

::: demo 使用`type`、`plain`、`round`、`circle`属性来定义Button的样式
``` html 
    <div>
        <z-button>默认按钮</z-button>
        <z-button type="primary">主要按钮</z-button>
        <z-button type="success">成功按钮</z-button>
        <z-button type="info">信息按钮</z-button>
        <z-button type="warning">警告按钮</z-button>
        <z-button type="danger">危险按钮</z-button>
    </div>
    <div style="margin-top:10px">
        <z-button plain>朴素按钮</z-button>
        <z-button type="primary" plain>主要按钮</z-button>
        <z-button type="success" plain>成功按钮</z-button>
        <z-button type="info" plain>信息按钮</z-button>
        <z-button type="warning" plain>警告按钮</z-button>
        <z-button type="danger" plain>危险按钮</z-button>        
    </div>
    <div style="margin-top:10px">
        <z-button round>朴素按钮</z-button>
        <z-button type="primary" round>主要按钮</z-button>
        <z-button type="success" round>成功按钮</z-button>
        <z-button type="info" round>信息按钮</z-button>
        <z-button type="warning" round>警告按钮</z-button>
        <z-button type="danger" round>危险按钮</z-button>        
    </div>
    <div style="margin-top:10px">
        <z-button icon="icon-search1" circle></z-button>
        <z-button icon="icon-play" type="primary" circle></z-button>
        <z-button icon="icon-dingding" type="success" circle></z-button>
        <z-button icon="icon-wifi" type="info" circle></z-button>
        <z-button icon="icon-sound" type="warning" circle></z-button>
        <z-button icon="icon-like1" type="danger" circle></z-button>        
    </div>    
```
:::

## 禁用状态

按钮不可用状态

::: demo 使用`disabled` 属性来定义按钮是否可用，它接受一个`Boolean`值。
``` html
    <div>
        <z-button disabled>默认按钮</z-button>
        <z-button disabled type="primary">主要按钮</z-button>
        <z-button disabled type="success">成功按钮</z-button>
        <z-button disabled type="info">信息按钮</z-button>
        <z-button disabled type="warning">警告按钮</z-button>
        <z-button disabled type="danger">危险按钮</z-button>
    </div>
    <div style="margin-top:10px">
        <z-button disabled plain>朴素按钮</z-button>
        <z-button disabled type="primary" plain>主要按钮</z-button>
        <z-button disabled type="success" plain>成功按钮</z-button>
        <z-button disabled type="info" plain>信息按钮</z-button>
        <z-button disabled type="warning" plain>警告按钮</z-button>
        <z-button disabled type="danger" plain>危险按钮</z-button>        
    </div>
```
:::

## 文字按钮

::: demo
``` html
    <z-button type="text">文字按钮</z-button>
    <z-button type="text" disabled>文字按钮</z-button>
```
:::

## 图标按钮

::: demo
``` html
    <z-button type="primary" icon="icon-delete"></z-button>
    <z-button type="primary" icon="icon-search1">搜索</z-button>
    <z-button type="primary">搜索<z-icon type="icon-search1" /></z-button>
```
:::

## 加载中

::: demo
``` html
    <z-button type="primary" icon="icon-loading1" :loading="true">加载中</z-button>
    <z-button type="primary" icon="icon-loading1" :loading="true" circle></z-button>
```
:::

## 按钮组

::: demo
``` html
    <z-button-group>
        <z-button type="primary" icon="icon-delete"></z-button>
        <z-button type="primary" icon="icon-search1"></z-button>        
    </z-button-group>
```
:::
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |