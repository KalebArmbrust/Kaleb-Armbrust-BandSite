const urlComments = "https://project-1-api.herokuapp.com/comments?api_key=4f7a0fd5-c646-44d7-b418-094a97a9b246";
const urlDelete = "https://project-1-api.herokuapp.com/comments/:commendId?api_key=4f7a0fd5-c646-44d7-b418-094a97a9b246"


axios
.get(urlComments)
.then(res => {
   res.data.forEach(comment => {
      createComment(comment);
   })
})
.catch(err => console.log(err))

// axios
// .post(urlComments, {
   
// })
// .then(function (response) {
//    console.log(response.data);
//  })
// .catch(function (error) {
//    console.log(error);
//  });

const clear = () => {
   document.querySelector('.comments-previous').innerText = '';
 }

let posts = [];

const form = document.querySelector('.comments-add__form');
form.addEventListener('submit', (e) => {
            e.preventDefault();
            newFunc();
            // clear();
         })


function newFunc() {
   const newName = form.querySelector('.comments-add__form-box1').value;
   const newComment = form.querySelector('.comments-add__form-box2').value;
   form.append(newName);
   form.append(newComment);
      }


    function createComment(comment) {
       const previous = document.querySelector('.comments-previous');
       const commentContainer = document.createElement('div');
       const commentImage = document.createElement('img');
       const commentName = document.createElement('h3');
       const commentTimestamp = document.createElement('h4');
       const commentText = document.createElement('p');
       commentName.innerText = comment.name;
       commentTimestamp.innerText = comment.timestamp;
       commentText.innerText = comment.comment;
       previous.appendChild(commentContainer);
       commentContainer.appendChild(commentImage);
       commentContainer.appendChild(commentName);
       commentContainer.appendChild(commentTimestamp);
       commentContainer.appendChild(commentText);
       commentContainer.classList.add('comments-previous__container');
       commentImage.classList.add('comments-previous__container-image');
       commentTimestamp.classList.add('comments-previous__container-timestamp');
       commentName.classList.add('comments-previous__container-name');
       commentText.classList.add('comments-previous__container-text');
    }

