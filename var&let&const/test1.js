//全局作用域下
var global_var_one = 1
var global_let_one = 1
const global_const_one = 1 

//函数作用域下
function fun_scope () {
    var global_var_one = 1
    var global_let_one = 1
    const global_const_one = 1 
}

//块级作用域
let callbacks = []
for(let i = 0; i < 10; i++) {
    callbacks[i] = function (i) {
        console.log(i)
    }
    console.log(i)
}
callbacks[9]() // 9