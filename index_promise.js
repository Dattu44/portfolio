/*function mypromise(students){
    new Promise((resolve,reject)=>{
        if(students.marks>35){
            resolve(''$(students.name) is passed)
        }
        else{
            reject(''$(students.name) is failed)
        }
    })
}
mypromise({name:'sneha',marks:30}).then((result)=>{
    console.log('success',result)
}).catch((err)=>{
    console.log('failed',err)
})
mypromise({name:'sindhu',marks:50}).then((result)=>{
    console.log('success',result)
}).catch((err)=>{
    console.log('failed',err)
})*/
let promise1 = new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('promise1 is resolved')
        },1000)
    })
let promise2 =  new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('promise2 is resolved')
        },2000)
    })
Promise.all([promise1,promise2]).then((result)=>{
    console.log('success',result)
}).catch((err)=>{
    console.log(err)
})
Promise.allSettled([promise1,promise2]).then((result)=>{
    console.log('success',result)
})
Promise.race([promise1,promise2]).then((result)=>{
    console.log('success',result)
}).catch((err)=>{
    console.log(err)
})