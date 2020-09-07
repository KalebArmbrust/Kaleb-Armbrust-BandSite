const addComment = document.querySelector(".commentsForm");
const list = document.querySelector('.comments-previous');

addComment.addEventListener('submit', function(e){
    e.preventDefault();
    const name = addComment.querySelector('input[type="text"]').value;
    const comment = addComment.querySelector('.commentBox2').value;
    console.log(name);
    console.log(comment);
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    h4.textContent = name;
    p.textContent = comment;
    div.appendChild(h4);
    div.appendChild(p);
    list.appendChild(div);
});

window.addEventListener('DOMContentLoaded',() => {
    const currentComment1 = document.createElement('h3');
    const currentComment2 = document.createElement("p");
    currentComment1.innerText = "Michael Lyons 12/18/2018";
    currentComment2.innerText = "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.";
    currentComment1.style.marginRight = "auto";
    currentComment1.style.marginBottom = "0";
    list.appendChild(currentComment1).value;
    list.appendChild(currentComment2).value;
});

window.addEventListener('DOMContentLoaded',() => {
    const currentComment1 = document.createElement('h3');
    const currentComment2 = document.createElement("p");
    currentComment1.innerText = "Gary Wong 12/12/2018";
    currentComment2.innerText = "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself.";
    currentComment1.style.marginRight = "auto";
    currentComment1.style.marginBottom = "0";
    list.appendChild(currentComment1).value;
    list.appendChild(currentComment2).value;
});

window.addEventListener('DOMContentLoaded',() => {
    const currentComment1 = document.createElement('h3');
    const currentComment2 = document.createElement("p");
    currentComment1.innerText = "Theodore Duncan 11/15/2018";
    currentComment2.innerText = "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever.";
    currentComment1.style.marginRight = "auto";
    currentComment1.style.marginBottom = "0";
    list.appendChild(currentComment1).value;
    list.appendChild(currentComment2).value;
});



// let defaultComment = [
//     {name: "Michael Lyons", timestamp: "12/18/2018", comment: "They Blew the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."},
//     {name: "Gary Wong", timestamp: "12/12/2018", comment: "Every time I see him shred I feel so motivated to get off my couch andhop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"},
//     {name: "Theodore Duncan", timestamp: "11/15/2018", comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!"}
// ]

// const addComment = document.querySelector(".commentsForm");

// window.addEventListener("DOMContentLoaded", displayComment);

// function displayComment(name, comment) {
//     addComment.addEventListener('submit', function(e){
//         e.preventDefault();
//         e.name.target.value;
//         e.comment.target.value;
//         defaultComment.unshift(displayComment);
//         defaultComment.pop();
// })}
