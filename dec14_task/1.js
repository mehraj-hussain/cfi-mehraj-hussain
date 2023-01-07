// // function fun(n) {
// // if (n == 4) return n;
// // else return 2 * fun(n + 1);
// // }
// // console.log(fun(2))

// // function fun(x, y) {
// // if (x == 0) return y;
// // return fun(x - 1, x + y);
// // }
// // // console.log(fun(4, 3));

// // function fun(n) {
// //     if (n == 0) return;
// //     console.log(n % 2);
// //     fun(Math.floor(n / 2));
// //     }
// //     fun(25);



//     // function fun(x, y) {
//     //     if (y == 0) return 0;
//     //     return x + fun(x, y - 1);
//     //     }
//     //     function fun2(a, b) {
//     //     if (b == 0) return 1;
//     //     return fun(a, fun2(a, b - 1));
//     //     }
//     //     console.log (fun(3,6));


    // function fun(n) {
    //     if (n == 0 || n == 1) return n;
    //     if (n % 3 != 0) return 0;
    //     return fun(n / 3);
    // }
    // console.log(fun(243));





    // function f(n) {
    //     if (n <= 1) return 1;
    //     if (n % 2 == 0) return f(n / 2);
    //     return f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1));
    //     }

    //     console.log(f(11))


// function f(n) {
// if (n / 2) {
//     f(Math.floor(n / 2));
//     }
//     console.log(n % 2);
//     }
            
//     f(1024);

// function fun(x, y) {
// if (y == 0) return 0;
// return x + fun(x, y - 1);
// }
// function fun2(a, b) {
// if (b == 0) return 1;
// return fun(a, fun2(a, b - 1));
// }

// console.log(fun2(3,5))


// function f(n) {
//     if (n <= 1) return 1;
//     if (n % 2 == 0) return f(n / 2);
//     return f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1));
//     }

//     console.log(f(68))


    // function fun(n) {
    //     if (n == 0 || n == 1) return n;
    //     if (n % 3 != 0) return 0;
    //     return fun(n / 3);
    //     }


    //     console.log(fun(81))


    // function foo(n, r) {
    //     if (n > 0) return n % r + foo(Math.floor(n / r), r);
    //     else return 0;
    //     }
    //     console.log(foo(513, 2))


// function f(n) {
//     var i = 1;
//     if (n >= 5) return n;
//     n = n + i;
//     i++;
//     return f(n);
//     }
//     console.log(f(1));

// function robot(n, a, b) {
//     if (n <= 0) return;
//     robot(n - 1, a, b + n);
//     console.log(n, a, b);
//     robot(n - 1, b, a + n);
//     }
//     robot(2, 5, 2)



// function ths(n) {
//     if (n < 1) return;
//     ths(n - 1);
//     ths(n - 3);
//     console.log(n);
//     }
//     ths(8);


// function count(n) {
//     var d = 1;
//     console.log(n);
//     console.log(d);
//     d++;
//     if (n > 1) count(n - 1);
//     console.log(d);
//     }
//     count(3);








// function foo(n, r) {
//     if (n > 0) return n % r + foo(Math.floor(n / r), r);
//     else return 0;
//     }
//     console.log(foo(513, 2));


// function f(n) {
//     var i = 1;
//     if (n >= 5) return n;
//     n = n + i;
//     i++;
//     return f(n);
//     }
//     console.log(f(1));


// function count(n) {
//     var d = 1;
//     console.log(n);
//     console.log(d);
//     d++;
//     if (n > 1) count(n - 1);
//     console.log(d);
//     }
//     count(3)


// function f(n) {
//     if (n <= 1) {
//     console.log(n);
//     } else {
//     f(Math.floor(n / 2));
//     console.log(n % 2);
//     }
//     }
//     f(1024);


// function f(n) {
//     if (n / 2) {
//     f(Math.floor(n / 2));
//     }
//     console.log(n % 2);
//     }
//     f(1024);


function robot(n, a, b) {
    if (n <= 0) return;
    robot(n - 1, a, b + n);
    console.log(n, a, b);
    robot(n - 1, b, a + n);
    }
    robot(2, 5, 2);