// 判断数据类型部分的代码
const judgeType = (typeName) => {
  return (data) => {
    return Object.prototype.toString.call(data).slice(8, -1).toLocaleLowerCase() === typeName
  }
}
const isObject = judgeType('object')

const isArray = judgeType('array')

const isString = judgeType('string')

const isNumber = judgeType('number')

const isBoolean = judgeType('boolean')

const isNullValue = (data) => {
  if (isArray(data)) {
    const realData = data.filter(item => !isNullValue(item))
    return realData.length === 0
  } else if (isObject(data)) {
    const realKeys = Object.keys(data).filter(key => !isNullValue(data[key]))
    return realKeys.length === 0
  }
  return data == null
}
// end

// 数据操作部分的代码
const removeLastComma = (str) => {
  return str.substr(0, str.length - 1)
}

const parseArray = (data = []) => {
  const str = data.reduce((total, cur) => {
    if (!isNullValue(cur)) {
      total += microParse(cur) + ','
    }
    return total
  }, '')
  return `[${removeLastComma(str)}]`
}

const parseObj = (data = {}) => {
  const str = Object.keys(data).reduce((total, cur) => {
    if (!isNullValue(data[cur])) {
      total += `${cur}:${microParse(data[cur])},`
    }
    return total
  }, '')

  return `{${removeLastComma(str)}}`
}

const parseString = (data) => {
  return `"${data}"`
}

/**
 * 元转化：根据数据类型选择具体的转化操作
 * @param {*} data 
 */
const microParse = (data) => {
  if (isString(data)) {
    return parseString(data)
  } else if (isArray(data)) {
    return parseArray(data)
  } else if (isObject(data)) {
    return parseObj(data)
  }
  // number 和 boolean 型的值不需要转化，直接返回即可
  return data
}
// end

// 真正控制转化流程的函数
const parse = (data, seperator = ",") => {
  if (!isObject(data))
    return new Error('解析目标必须是一个对象！')

  const strs = Object.keys(data).map(cur => {
    if (!isNullValue(data[cur])) {
      return `${cur}:${microParse(data[cur])}`
    }
    return null
  })

  return strs.filter(item => !!item).join(seperator)
}

export default parse
