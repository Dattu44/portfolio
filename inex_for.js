//for loop
//js program to print 5 table
let n=10
for(let i=1;i<=10;i++){
    console.log(n+'*'+i+'='+i*n)
}

//js program to find sum of even numbers between 1 to 50
let sum=0
for(let i=1;i<=30;i++){
    if(i%2==0){
        sum+=i
     }
    }
 console.log(sum)

 //while loop
 //js program to print prime numbers from 2 to 20 using while loop
 let i=2
 while(i<=20){
    let flag=0
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1
            break
         }
     }
     if(flag==0)
        console.log(i)
 i++
 }

 //js program to print sum of all odd numbers between 1and 20 using while loop
 let oddsum=0
 let j=1
 while(j<=20){
    if(j%2!=0){
        oddsum+=i
     }
     j++
 }
 console.log(oddsum)

 //js to program to calculate the factorial of number using while loop
 let num=5
 let fact=1
 while(num>0){
    fact*=num
    num--
}
console.log(fact)


