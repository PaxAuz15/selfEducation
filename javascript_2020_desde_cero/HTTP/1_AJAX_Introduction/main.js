const list_user = document.getElementById('list_user');
const list_post = document.getElementById('list_post');
const get_users = document.getElementById('get_users');
const get_posts = document.getElementById('get_posts');

const get = 'GET';
const post = 'POST';
const user = 'https://jsonplaceholder.typicode.com/users';
const posts = 'https://jsonplaceholder.typicode.com/posts';

const getData = (entryData)=>{
    const data = JSON.parse(entryData.target.response);
    const whoCallMe = entryData.target.responseURL;
    if(whoCallMe===user){
        insertUser(data)
    }else if(whoCallMe===posts){
        insertPosts(data)
        console.table(data)
    }
}

const insertUser = (data) => {
    for (const dataItem of data){
        const list_users = document.createElement('li');
        list_users.textContent = `${dataItem.id} - ${dataItem.name}`;
        list_user.appendChild(list_users);
    }
}

const insertPosts = (data) => {
    for (const dataItem of data){
        const list_posts = document.createElement('li');
        const titlePost = document.createElement('li');
        const bodyPost = document.createElement('li');
        list_posts.textContent = `Post #${dataItem.id}`;
        const content_posts = document.createElement('ul');
        titlePost.textContent = `Title: ${dataItem.title}`;
        bodyPost.textContent = dataItem.body;
        list_post.appendChild(list_posts);
        list_posts.appendChild(content_posts);
        content_posts.appendChild(titlePost).appendChild(bodyPost);
    }
}

const eventGetData = (dataGet) =>{
    let xhr;

    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open(get,dataGet);
    xhr.addEventListener('load',getData);
    xhr.send()
}


get_users.addEventListener('click',()=>{
    eventGetData(user)
});

get_posts.addEventListener('click',()=>{
    eventGetData(posts)
});