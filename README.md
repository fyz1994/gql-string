# gql-string
> 根据查询参数对象拼接graphql查询字符串
> 
> 再也不用哭着唱“我曾经拼过山和大海～”

## 安装
```js
npm i --save gql-string
```

## 使用
```js
import parse from 'gql-string'
// 假设您的查询对象是 testObj
const testObj = { a: 1, b: 'hahaha', c: undefined, d: { dd1: 'haha' } }

// 执行以下操作即可拼接出您所需的字符串
parse(testObj)

// 默认的拼接字符是','，您可以通过传给 parse 函数第二个参数 seperator 来指定分隔符，例如：
parse(testObj,'\n')
```

## 注意事项

- 本函数将以下类型的数据认为是空值，在生成查询字符串过程中会自动将其过滤
  - null
  - undefined
  - []
  - {}
  - [undefined]
  - {undefined}
- 在`2.0`版本可以考虑某些用户的个性化需求，可以指定自定义的空值，例如有些用户可能需要过滤0

## 更新日志
- 1.0.0
  - 第一个稳定版本发布
