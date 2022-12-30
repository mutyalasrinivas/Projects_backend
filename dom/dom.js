// console.log(document.links)
// console.log(document.images)
// console.log(document.all)
console.log(document.title)
document.title="sharpener"
console.log(document.title)
// var headerTitle=document.getElementById("header-title")
// // headerTitle.textContent="good"
// // headerTitle.innerText="morning"
// console.log(headerTitle)
// var header=document.getElementById('main-header')
// header.style.borderBottom='solid 3px #000'
// var subHead=document.getElementById('sub-head')
// subHead.style.color='green'
// subHead.style.fontWeight='bold'

// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// items[2].style.backgroundColor='green'
// for(var i=0;i<items.length;i++){
//     items[i].style.color='yellow'
//     items[i].style.fontWeight='bold'
// }
// var li=document.getElementsByTagName('li')
// console.log(li)
// li[2].style.backgroundColor='green'
// for(var i=0;i<li.length;i++){
//     li[i].style.color='yellow'
//     li[i].style.fontWeight='bold'
// }

// li[1].style.color='red'
 
// var header=document.querySelector('#main-header')
// header.style.borderBottom='solid 15px blue'
// var item=document.querySelector('.list-group-item')
// item.style.color='blue'
// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor='green'
// var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.visibility='hidden'

//querySelectorAll
var secondItem=document.querySelectorAll('.list-group-item:nth-child(2)')
console.log(secondItem)
//  secondItem.style.backgroundColor='yellow'
var odd=document.querySelectorAll('.list-group-item:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}