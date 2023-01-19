console.log("hello welcome")

const saveToLocalStorage=(event)=>{
   event.preventDefault();
  const expense=event.target.expense.value;
  const description=event.target.description.value;
  const category =event.target.category.value;
  let obj={
    expense,
    description,
    category
  }
  localStorage.setItem(obj.description,JSON.stringify(obj))
  showUserOnScreen(obj)
  function showUserOnScreen(obj){
    const parentEle=document.getElementById('listOfitems')
    const childEle =document.createElement('li')

    childEle.textContent= obj.expense +'-'+obj.description + '-'+obj.category
    const deleteBtn =document.createElement('input')
    deleteBtn.type='button'
    deleteBtn.value='Delete Expense'
    
    deleteBtn.onclick=()=>{
        localStorage.removeItem(obj.description)
        parentEle.removeChild(childEle)
     }

    const editButton =document.createElement('input')
    editButton.type='button'
    editButton.value='edit expense'
    editButton.onclick=()=>{
        localStorage.removeItem(obj.description)
        parentEle.removeChild(childEle)
         var expenses=document.getElementById('expense')
         var descriptions=document.getElementById('description')
         var categorys=document.getElementById('category')

         expenses.value=obj.expense
         descriptions.value=obj.description
         categorys.value=obj.category
    }
    childEle.appendChild(editButton)
    childEle.appendChild(deleteBtn)
    parentEle.appendChild(childEle)
  }

}