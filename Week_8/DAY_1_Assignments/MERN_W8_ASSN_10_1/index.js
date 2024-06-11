function getPosts(){
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>console.table(posts))
    .catch(err=>console.log(err))
}

getPosts()  

async function getPosts2(){

    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>console.log(posts))
    .catch(err=>console.log(err))
}

getPosts2() 