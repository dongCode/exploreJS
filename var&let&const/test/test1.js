//全局作用域下
var global_var_one = 1
var global_let_one = 1
const global_const_one = 1 

//函数作用域下
function fun_scope () {
    var fun_var_one = 1
    var fun_let_one = 1
    const fun_const_one = 1 
}

//块级作用域
let callbacks = []
for(let i = 0; i < 10; i++) {
    callbacks[i] = function () {
        console.log(i)
    }
}
callbacks[9]() // 9

//怪异之处
let i = 'global scope'
for(let i = 0;
    i < 3; 
    i++,console.log(i) // 1 2 3
) { 
    let i = 'block scope';
    console.log(i) // block scope
} 
console.log(i) // global scope