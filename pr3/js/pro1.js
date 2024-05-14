// 2. Write a JavaScript program to find the factorial of a number.
let a=1;
let no= 5;
let fact = 1;
let h1 = document.querySelector('h1')

while(a<=no) // 1 <=5
{
  fact = fact*a // f= 1*1 = 1*2*3*4*5
  a++ //1+1 =2+1 = 3+1 =4+1 = 5+1 = 6= false
}
h1.innerHTML +=  (`Factorial of ${no} is ${fact}`) ;

//3. Write a JavaScript program to check whether a number is an Armstrong number or not.
let sum = 0;
let number = 253;
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10); 
}
if (sum == number) {
    document.querySelector('#pr1').innerHTML=`${number} is an Armstrong number`;
}
else {
    document.querySelector('#pr1').innerHTML=`${number} is not Armstrong number`;
}
// 14.Write a JAVASCRIPT Program that displays below pattern using nested for loop:
let i = 1;
let j = 1;
let k = 1;
let h2 = document.querySelector('h2')

for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        h2.innerHTML += k; 
        k++;
    }
    h2.innerHTML +=("<br>");
}
 