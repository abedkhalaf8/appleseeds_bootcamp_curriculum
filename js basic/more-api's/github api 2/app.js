const img = document.createElement('img');
const btn = document.querySelector('button');
const login = document.createElement('h1');
const repo = document.createElement('h2');
const searchContent = document.querySelector('#search-box');


btn.addEventListener('click', () => {
    let text = searchContent.value; 
    searchApi(text);
})

function searchApi (username) {
  let  url = 'https://api.github.com/users/'+ username;
  fetch(
    url
  )
    .then((res) => {
      return res.json(); 
    })
    .then((data) => {
        login.innerHTML = data.login;
        login.classList.add("username");           
        document.body.appendChild(login);
        img.src = data.avatar_url;
        document.body.appendChild(img);
        repo.innerHTML = data.public_repos;
        document.body.appendChild(repo);
    });
}