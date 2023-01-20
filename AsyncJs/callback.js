const posts=[
    {title:'first post',body:'this is body of post one',createdAt :new Date().getTime()},
    {title:'second post',body:'this is body of post two',createdAt :new Date().getTime()}
]
   let intervalId;
 function getPost(){
    clearInterval(intervalId)
   intervalId= setInterval(()=>{
        let output=''
       posts.forEach((post,index)=>{   
              output+=`<li>${post.title} -last updated${Math.floor((new Date().getTime()-post.createdAt)/1000) } secs ago</li>`;
       })
       document.body.innerHTML=output;
    },1000)

 }
 function createPost(post,callback){
    setTimeout(()=>{
       posts.push({...post,createdAt:new Date().getTime()})
       callback()
    },2000)
 }

 function create4thPost(post,callback){
    setTimeout(()=>{
          posts.push({...post,createdAt:new Date().getTime()})
          callback()
    },2000)
 }
  createPost({title:'3 post',body:'body of 3rd post'},getPost)
  create4thPost({title:'4 post',body:'body of 4th post'},getPost)



 