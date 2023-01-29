window.addEventListener("DOMContentLoaded",showData)


function saveData(event){
     event.preventDefault();
    const price=event.target.price.value;
    const dname=event.target.dname.value;
    const table=event.target.table.value;
     const obj={
        price,
        dname,
        table
     }
     axios.post('https://crudcrud.com/api/ea0e9d0b4719410e95fb38c054750d6f/orders',obj)
     .then((res)=>{
        const ul=document.getElementById('list')
        const newUser= `<li id=id_${res.data._id}><h3>${res.data.table}</h3></br>${res.data.price}--->${res.data.dname}<button onclick="deleteUser('${res.data._id}')">Delete</button></li>`
        ul.innerHTML=ul.innerHTML+newUser;

     })
     .catch((err)=>{
        console.log(err);
     })
}

function showData(){
    axios.get('https://crudcrud.com/api/ea0e9d0b4719410e95fb38c054750d6f/orders')
    .then((res)=>{
          const ul=document.getElementById('list')
          res.data.forEach((t)=>{
          const user=   `<li id=id_${t._id}><h3>${t.table}</h3></br>${t.price}--->${t.dname}<button onclick="deleteUser('${t._id}')">Delete</button></li>`
          ul.innerHTML=ul.innerHTML+user;
           
    })
})
}
 
function deleteUser(_id){
    axios.delete(`https://crudcrud.com/api/ea0e9d0b4719410e95fb38c054750d6f/orders/${_id}`)
    .then((res)=>{
         console.log(res)
         console.log('succesfully deleted')
         removeFromUi(_id);
    })
    .catch((err)=>{
        console.log(err)
    })
}
function removeFromUi(_id){
    const toDelete =document.getElementById('list')
    if(toDelete){
        toDelete.remove()
    }

}