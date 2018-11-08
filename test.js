import parse from './index'

const test1 = {}
const test2 = { a: 1, b: 'hahaha', c: undefined, d: [1, 2, 3] }
const test3 = { a: 1, b: 'hahaha', c: undefined, d: { dd1: 'haha' } }
const test4 = undefined
const test5 = []
const test6 = { a: 1, b: 'hahaha', c: [1, 2, 3], d: { dd1: 'haha', dd2: [1, 2, 3] }, e: undefined, f: [undefined], g: { undefined }, h: [1, '2', { name: 'fyz' }] }

const str = parse(test6, ',')
console.log(str)
