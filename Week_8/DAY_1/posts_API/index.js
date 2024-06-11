//access posts api and get json data
function getPosts(){
    //async api req
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>console.table(posts))
    .catch(err=>console.log(err))
}

getPosts()  

async function getPosts2(){
    //async and await
    try{
    let res= await fetch('https://jsonplaceholder.typicode.com/posts');
    let data= await res.json();
    console.log(data);
    }
    catch(er)
    {
        console.log(er);
    }
}

getPosts2() 