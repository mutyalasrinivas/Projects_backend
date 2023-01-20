console.log('person1: shows ticket1')
console.log('person2: shows ticket2')
const perMovie = async ()=>{
 const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
 });

const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
const addButter = new Promise((resolve,reject)=>resolve(`butter`));
const getColdDrinks=new Promise((resolve,reject)=>resolve(`coldDrinks`))
let ticket= await promiseWifeBringingTicks;
console.log(`wife: i have the${ticket}`)
console.log('we should go in');
console.log('wife: no iam hungry');

let popcorn=await getPopcorn;
console.log(`husband: i have the${popcorn}`)
console.log('we should go in');
console.log('wife: i need butter');

const butter= await addButter;
console.log(`husband: i have the${butter}`)
console.log('we should go in');
console.log('wife: lets go');
const coldDrinks=await getColdDrinks;
console.log(`husband: i will took the${coldDrinks}`)
console.log('thank you');
console.log('husband: okay lets go');

// let [popcorn,butter,coldDrinks]= await Promise.all([getPopcorn,getColdDrinks,addButter])
// console.log(`${popcorn},${coldDrinks},${butter}`)
return ticket;
}
perMovie().then((m)=>console.log(m));

console.log('person4: shows ticket');
console.log('person5: shows ticket')