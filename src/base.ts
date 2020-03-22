// 1、基本类型 6 (使用无限制)
const str: string = 'sting words'
const num: number = 123
const bool: boolean = true
const udf: undefined = undefined
const nul: null = null
const any: any = 'any type'
// 特殊 3
interface Obj {}
const voidReturn = (): void => {}
function fnT<T>(legnth: number, val: T): T[] {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = val
  }
  return result
}

// 2、数组 5
interface ArrInt {
  [index: number]: number
}
interface ArrT<T> {
  [index: number]: T
}

const arr: string[] = ['tre', 'sdf', '888'] // 数组合并
const arr2: [string, number, any] = ['12', 123, ''] // 元组合并
const arr3: ArrInt = [1, 2, 3, 4] // 接口定义
const arr4: Array<number> = [1, 2, 3, 4, 5] // 泛型定义
const arrT: ArrT<any> = [1] // 泛型+接口定义

// 3、函数 4
interface FnInt {
  (x: string, y: string): string
}

// 函数声明
function fn1(x: string, y: string): string {
  return x + y
}
// 函数表达式
const fn2: (x: string, y: string) => void = (x: string, y: string): void => {}
// 接口定义
const fn3: FnInt = (x: string, y: string): string => x + y
// 泛型
function fn4<T>(legnth: number, val: T): T[] {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = val
  }
  return result
}
fn4(3, 9) // 类型推论
fn4<number>(3, 1) // 指定类型
fn4<string>(3, 'string') // 指定类型

// 4、对象 2+6
interface ObjInt<T = string> {
  name: string // 确定属性
  age?: number // 可选属性
  [props: string]: any // 任意属性
  readonly id: number // 只读属性
  count(x: number, y: number): void // 多个
  dec: T // 泛型
}
let obj: ObjInt<number> = {
  id: 999,
  name: 'TOM',
  // age: 18,
  newProp: 'any typs',
  count: (x, y) => {},
  dec: 123
}

// 6、别名
type Unnormal = string | ObjInt<number>
let testStr: Unnormal = 'string'
let testObj: Unnormal = {
  id: 999,
  name: 'TOM',
  // age: 18,
  newProp: 'any typs',
  count: (x, y) => {},
  dec: 123
}

let arrx: 'a' | 'b' = 'a'

console.log(
  `str: ${str}`,
  `num: ${num}`,
  `bool: ${bool}`,
  `udf: ${udf}`,
  `nul: ${nul}`,
  `any: ${any}`,
  `arr: ${arr}`
)
