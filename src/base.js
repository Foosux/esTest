// 1、基本类型 6 (使用无限制)
var str = 'sting words';
var num = 123;
var bool = true;
var udf = undefined;
var nul = null;
var any = 'any type';
var voidReturn = function () { };
function fnT(legnth, val) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = val;
    }
    return result;
}
var arr = ['tre', 'sdf', '888']; // 数组合并
var arr2 = ['12', 123, '']; // 元组合并
var arr3 = [1, 2, 3, 4]; // 接口定义
var arr4 = [1, 2, 3, 4, 5]; // 泛型定义
var arrT = [1]; // 泛型+接口定义
// 函数声明
function fn1(x, y) {
    return x + y;
}
// 函数表达式
var fn2 = function (x, y) { };
// 接口定义
var fn3 = function (x, y) { return x + y; };
// 泛型
function fn4(legnth, val) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = val;
    }
    return result;
}
fn4(3, 9); // 类型推论
fn4(3, 1); // 指定类型
fn4(3, 'string'); // 指定类型
var obj = {
    id: 999,
    name: 'TOM',
    // age: 18,
    newProp: 'any typs',
    count: function (x, y) { },
    dec: 123
};
var testStr = 'string';
var testObj = {
    id: 999,
    name: 'TOM',
    // age: 18,
    newProp: 'any typs',
    count: function (x, y) { },
    dec: 123
};
var arrx = 'a';
console.log("str: " + str, "num: " + num, "bool: " + bool, "udf: " + udf, "nul: " + nul, "any: " + any, "arr: " + arr);
