# gitbook-plugin-table
table 折叠插件

## 使用方式
注意：支持table表格使用

##1、添加点击事件
```
	<tr onclick="foldClick('classNm1', 'classNm2')"></tr>
```
</br>
参数说明

1. classNm1:  格式为tr_ + 自定义名称，需添加在需要折叠的行标签tr上，不支持td。 不同折叠层级的名称不能相同。
<br/> 例:
```
	<tr class="tr_fold1"></tr>
```

2. classNm2: 名称自定义， 添加在按钮所在行，需添加到td标签上。 <span style="color: red">不需要合并单元格的表格，不用添加rowspan=1。</span>
<br/> 例:
```
	<td class="td_fold1" rowspan=1> 
```

## 2、添加按钮
1. %indicator%: 按钮代替符,需加在td标签内 例：
```
   <td class="td_fold1" rowspan=1> 
	  %indicator%
	  内容1
	</td>
```

## 3、完整实例
```

<table>
  <tr>
    <th>标题1</th>
    <th>标题2</th>
  </tr>
  <tr onclick="foldClick('tr_fold1', 'td_fold1')">
    <td class="td_fold1" rowspan=1> 
      %indicator%
      内容1
    </td>
    <td>1</td>
  </tr>
  <tr class="tr_fold1">
    <td>2</td>
  </tr>
  <tr class="tr_fold1">
    <td>3</td>
  </tr>
   <tr onclick="foldClick('tr_fold2', 'td_fold2')">
    <td class="td_fold2" rowspan=1> 
      %indicator%
      内容1
    </td>
    <td>1</td>
  </tr>
  <tr class="tr_fold2">
    <td>2</td>
  </tr>
  <tr class="tr_fold2">
    <td>3</td>
  </tr>
<table>
```