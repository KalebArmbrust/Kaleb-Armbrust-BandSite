const urlComments = "https://project-1-api.herokuapp.com/comments?api_key=c96c0abc-3e8f-46ca-9145-93c0f269da4f";
const urlDelete = "https://project-1-api.herokuapp.com/comments/:commendId?api_key=c96c0abc-3e8f-46ca-9145-93c0f269da4f"

axios
.get(urlComments)
.then(res => {
   console.log(res.data);

   res.data.forEach(comment => {
      createComment(comment);
   })
})
.catch(err => console.log(err))

const form = document.querySelector('.comments-add__form');
form.addEventListener('submit', (e) => {
            e.preventDefault();
            // createComment(comment);
    })

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
// const addComment = document.querySelector(".commentsForm");
// const list = document.querySelector('.comments-previous');
// const name = addComment.querySelector('input[type="text"]').value;
//     const comment = addComment.querySelector('.commentBox2').value;

