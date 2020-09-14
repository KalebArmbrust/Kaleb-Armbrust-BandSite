const urlComments = "https://project-1-api.herokuapp.com/comments?api_key=49bb7add-b059-47f6-ad51-38bad97ca9ba";
const urlDelete = "https://project-1-api.herokuapp.com/comments/:commendId?api_key=49bb7add-b059-47f6-ad51-38bad97ca9ba"


function ax() { axios
.get(urlComments)
.then(res => {
   res.data.reverse().forEach(comment => {
      createComment(comment);
   })
})
.catch(err => console.log(err))
}

ax();


const clear = () => {
   document.querySelector('.comments-previous').innerText = '';
 }


const form = document.querySelector('.comments-add__form');
form.addEventListener('submit', (e) => {
            e.preventDefault();
            axios
               .post(urlComments, {
                  name: form.name.value,
                  comment: form.comment.value
               })
               .then(function (response) {
                  console.log(response.data);
                  clear();
                  ax();
               })
               .catch(function (error) {
                  console.log(error);
               });
         })


    function createComment(comment) {
       const previous = document.querySelector('.comments-previous');
       const commentContainer = document.createElement('div');
       const textContainer = document.createElement('div');
       const commentImage = document.createElement('img');
       const commentName = document.createElement('h3');
       const commentTimestamp = document.createElement('h4');
       const commentText = document.createElement('p');
       commentName.innerText = comment.name;
       commentTimestamp.innerText = comment.timestamp;
       commentText.innerText = comment.comment;
       previous.appendChild(commentContainer);
       previous.appendChild(textContainer);
       commentContainer.appendChild(commentImage);
       commentContainer.appendChild(commentName);
       commentContainer.appendChild(commentTimestamp);
       textContainer.appendChild(commentText);
       commentContainer.classList.add('comments-previous__container');
       textContainer.classList.add('comments-previous__textContainer')
       commentImage.classList.add('comments-previous__container-image');
       commentTimestamp.classList.add('comments-previous__container-timestamp');
       commentName.classList.add('comments-previous__container-name');
       commentText.classList.add('comments-previous__textContainer-text');
    }

