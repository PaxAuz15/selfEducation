const list_user = document.getElementById('list_user');
const list_post = document.getElementById('list_post');
const get_users = document.getElementById('get_users');
const get_posts = document.getElementById('get_posts');

get_users.addEventListener('click',()=>{
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET','https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data)=>{
        const dataUser = JSON.parse(data.target.response);
        console.log(dataUser);

        for (const userInfo of dataUser){
            const listUser = document.createElement('LI');
            listUser.textContent = `${userInfo.id} - ${userInfo.name}`;
            list_user.appendChild(listUser);
        }
    })

    xhr.send()
});
