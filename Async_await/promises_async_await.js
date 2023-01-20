console.log('person1: shows ticket1')
console.log('person2: shows ticket2')

const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});

const getPopcorn=promiseWifeBringingTicks.then((t)=>{
    console.log('wife:i have ticks')
    console.log('husband: we should go in');
    console.log('wife: no iam hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});
const getButter = getPopcorn.then((t)=> {
    console.log('husband: i have some popcorn')
    console.log('husband: we should go in');
    console.log('wife:  i need butter on popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} Butter`));
});
const getColdDrinks=getButter.then((t)=>{
    console.log('husband: i have some cold drinks')
    console.log('husband: we should go in');
    console.log('wife:  i need butter on colddrinks');
    return new Promise((resolve,reject)=>resolve(`${t} coldDrinks`));
});
 getColdDrinks.then((t)=>console.log(t))

console.log('person4: shows ticket');
console.log('person5: shows ticket');