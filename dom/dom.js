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
// var secondItem=document.querySelectorAll('.list-group-item:nth-child(2)')
// console.log(secondItem)
// //  secondItem.style.backgroundColor='yellow'
// var odd=document.querySelectorAll('.list-group-item:nth-child(odd)')
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green'
// }

//  var itemList=document.querySelector('#items');
// //  parent node
//  console.log(itemList.parentNode);
//   itemList.parentNode.style.backgroundColor='#f4f4f4';
//   console.log(itemList.parentNode.parentNode.parentNode)
//  parent Element
//   console.log(itemList.parentElement);
//    itemList.parentElement.style.backgroundColor='#f4f4f4';
//    console.log(itemList.parentElement.parentElement.parentElement)

//childNodes
// console.log(itemList.childNodes)
// console.log(itemList.children);
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow'

// //firstChild
// console.log(itemList.firstChild)
// //firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent='first'

// //lastChild
// console.log(itemList.lastChild)
// //lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent='second '

// //nextSibiling
// console.log(itemList.nextSibling)
// //nextElementSibiling
// console.log(itemList.nextElementSibling)

// //previousSbiling
// console.log(itemList.previousSibling)
// //previousElementSbiling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color='green'

//createElement

//create a div
var newDiv = document.createElement('div')
//add class
newDiv.className='hello'
//add id
newDiv.id='hello1'
//add attr
newDiv.setAttribute('title','Hello div')

//create text node
var newDivText =document.createTextNode('HEllo word ')
//add text to div
newDiv.appendChild(newDivText)
var container=document.querySelector('header .container')
var h1 = document.querySelector('header h1')
console.log(newDiv)
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1)

 
 //insert before item1
 var newDivTwo= document.createElement('div')
//add class
newDivTwo.className='hellotwo'
//add id
newDiv.id='hello2'
//add attr
newDivTwo.setAttribute('title','Hello divtwo')

var newDivTwoText =document.createTextNode('HEllo word ')
//add text to div
newDivTwo.appendChild(newDivTwoText)
var good=document.querySelector('ul .good')
var li = document.querySelector('ul li')
console.log(newDivTwo)
newDivTwo.style.fontSize='30px';
good.insertBefore(newDivTwo,li)



 
