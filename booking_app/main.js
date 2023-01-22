window.addEventListener("DOMContentLoaded", showData);

const form = document.getElementById("my-form");

form.addEventListener("submit", saveData);

function saveData(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const obj = {
        name: name,
        email: email
    }
    axios.post('https://crudcrud.com/api/4b052c69ebec4d9e88fdaa6d9e94aa26/appoinments', obj)
        .then((res) => {
            console.log(res.data);
            document.getElementById("name").value = "";
            document.getElementById("email") = "";
        }).catch(err => {
            console.log(err);
        })
 }

function showData(){
    axios.get("https://crudcrud.com/api/4b052c69ebec4d9e88fdaa6d9e94aa26/appoinments")
        .then(res => {
            const ul = document.getElementById("users");
            res.data.forEach(el => {
                const newUser = `<li id=${el._id}>${el.name} : ${el.email}<button onclick=deleteUser('${el._id}')> Delete</button><button onclick=editUser('${el._id}')> Edit</button></li>`
                ul.innerHTML = ul.innerHTML + newUser;
            })
        })
        .catch(err => {
            console.log(err);
        })
}

function deleteUser(_id){
    axios.delete(`https://crudcrud.com/api/4b052c69ebec4d9e88fdaa6d9e94aa26/appoinments/${_id}`)
        .then(() => {
            console.log("Deleted!");
            removeFromUI(_id);

        })  
        .catch(err => {
            console.log(err);
        })
}

function removeFromUI(id){
    const parent = document.getElementById("users");
    const toBeDeleted = document.getElementById(id);
    if(toBeDeleted) {
        toBeDeleted.remove();
    }
}

function editUser(el){
    const nameInput = document.getElementById("name");
    nameInput.value = el.name;
    const emailInput = document.getElementById("email");
    emailInput.value = el.email;

    removeFromUI(el._id);

    document.getElementById("btn").addEventListener("click",() => {
        const obj = {
            name: nameInput.value,
            email: nameInput.value
        }
        console.log(obj);



        axios.put(`https://crudcrud.com/api/4b052c69ebec4d9e88fdaa6d9e94aa26/appoinments/${el._id}`)
            .then(() => showData())
            .catch(err => console.log(err));

    })
}