const userText = document.querySelector(".user-text");
const userSubmit = document.querySelector(".user-submit");
const userList = document.querySelector(".user-list");

userSubmit.addEventListener('click', addtolist);

function addtolist(event){
    event.preventDefault();

    const userListDiv = document.createElement('div');
    userListDiv.classList.add('user-post');

    const newPost = document.createElement('h2');
    newPost.innerHTML = userText.value;

    userListDiv.appendChild(newPost);
    userList.appendChild(userListDiv);

    userText.value = "";
}