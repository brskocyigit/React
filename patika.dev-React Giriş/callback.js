// setTimeout(()=>{
//     console.log("merhaba")
// },2000)

// setInterval(()=>{
//     console.log("Merhaba ben her saniye çalışacağım")
// },1000)

// const sayHi = (cb)=>{
//     cb();
// }

// sayHi(()=>{
//     console.log("Hello")
// })

import fetch from 'node-fetch'
import axios from 'axios'
import { resolve } from 'path';

// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((data) => data.json())
// .then((users) => {
//     console.log("Users yüklendi",users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((posts) => console.log("Postlar yüklendi",posts))
// });


// async function getData(){
//     const {data:users} = await axios("https://jsonplaceholder.typicode.com/users");

//     console.log(users);

//     const {data:post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     console.log(post1);
// }

// getData();

const getUsers = () => {
    return new Promise(async(resolve,reject)=>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");

        resolve(data);
        
    });
};


const getPosts = (post_id) => {
    return new Promise(async(resolve,reject)=>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/"+post_id);

        resolve(data);
        
    });
};

// (async ()=>{

//     try{
//         const users = await getUsers();

//         const posts = await getPosts(1);

//         console.log(users);
//         console.log(posts);
//     }
//     catch(e){

//     }
// })();

Promise.all([getUsers(),getPosts(1)]).then(console.log).catch();