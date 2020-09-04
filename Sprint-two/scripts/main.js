const addComment = document.querySelector(".commentsForm");
const list = document.querySelector('.comments-previous');

addComment.addEventListener('submit', function(e){
    e.preventDefault();
    const name = addComment.querySelector('input[type="text"]').value;
    const comment = addComment.querySelector('.commentBox2').value;
    // console.log(name, comment);
    console.log(name);
    console.log(comment);

    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    // const date = document.createElement('span');
    const p = document.createElement('p');
    div.h4.font-size = 15px;

    h4.textContent = name;
    p.textContent = comment;

    div.appendChild(h4);
    // div.appendChild(date);
    div.appendChild(p);

    list.appendChild(div);
});