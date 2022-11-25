//bitwise AND
/* 
truth table
0  0  0
0  1  0
1  0  0
1  1  1
 
*/
//it performs operations on bits
console.log(10 & 7)

/*first step convert decimal to binary 
10 = 1010
7  = 0111
     0010  =  2 in decimal

     order of one is not using loop
     find the nearest power of 2 nad the ans awas bit wise AND
*/


// bitwise  Or
console.log(6|9)
 
/*
0  0  0
0  1  1
1  0  1
1  1  1

6 = 0110
9 = 1001
    1111 = 15 = F 
*/

/*
 bitwise XOR ^
 
 0  0  0
 0  1  1
 1  0  1
 1  1  0

 15 ^ 12

 1111
 1100
 0011 = 3
*/

 console.log(15 ^ 12)

// bitwise Not ~
 
/*it flips the bits
 unary operators
  
*/
 
/*5 = 101
 5 = 00000101

     00000101
         +  1
     00000110  = -6
/*

