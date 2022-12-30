// console.log(document.links)
// console.log(document.images)
// console.log(document.all)
console.log(document.title)
document.title="sharpener"
console.log(document.title)
var headerTitle=document.getElementById("header-title")
// headerTitle.textContent="good"
// headerTitle.innerText="morning"
console.log(headerTitle)
// var header=document.getElementById('main-header')
// header.style.borderBottom='solid 3px #000'
// var subHead=document.getElementById('sub-head')
// subHead.style.color='green'
// subHead.style.fontWeight='bold'

var items=document.getElementsByClassName('list-group-item')
console.log(items)
items[2].style.backgroundColor='green'
for(var i=0;i<items.length;i++){
    items[i].style.color='yellow'
    items[i].style.fontWeight='bold'
}