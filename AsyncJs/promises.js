const posts=[
    {title:'first post',body:'this is body of post one',createdAt :new Date().getTime()},
    {title:'second post',body:'this is body of post two',createdAt :new Date().getTime()}
]
  
 function getPost(){
     
   setTimeout(()=>{
        let output=''
       posts.forEach((post,index)=>{   
              output+=`<li>${post.title} -last updated${Math.floor((new Date().getTime()-post.createdAt)/1000) } secs ago</li>`;
       })
       document.body.innerHTML=output;
    },1000)

 }
 async function createPost(post) {
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          posts.push({...post, createdAt: new Date().getTime()});
          resolve();
        }, 2000);
      });
    } catch (error) {
      console.log(error);
    }
  }
    
 
  async function deletePost(post) {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          posts.pop(post);
          if (posts.length === 0) {
            reject('Error: something went wrong');
          } else {
            resolve();
          }
        }, 1000);
      });
    } catch (error) {
      console.log(error);
    }
  }

//promise.all


const promise1 = Promise.resolve("hello world");
const promise2=10;
const promise3= new Promise((resolve,reject)=>{
       setTimeout(resolve,2000,'Good bye')
})
const user={
    username:'yash',
    lastactivitytime:'13th of Jan'
}

Promise.all([promise1,promise2,promise3]).then(val=>console.log(val))
updatelastactivitytime=>{
    return new Promise((resolve,reject)=>{
        setTimeOut(()=>{
          user.lastactivitytime=new Date().getTime()
          resolve(user.lastactivitytime)
        },1000)
    })
}

userupdatesapost=>{
    Promise.all([createPost, updatelastactivitytime]).then(([createPostresolves,updatelastactivitytimeresolves]) => {
        console.log(updatelastactivitytimeresolves)
    }).catch(err=> console.log(err))
}


Promise.all([promise1,promise2,promise3]).then(val=>console.log(val))





 createPost({title:'3rd post',body:'3rd post details'}).then(getpost)
//  createPost({title:'4 post',body:'4 post details'}).then(getPost).then(deletePost).catch((error)=>{console.log("array is empty")}).then(getPost).then(deletePost).catch((error)=>{console.log("array is empty")}).then(getPost).then(deletePost).catch((error)=>{console.log("array is empty")}).then(getPost).then(deletePost).then(getPost).catch((error)=>{console.log("array is empty")}).then(deletePost).then(getPost).catch((error)=>{console.log("array is empty")})
 

