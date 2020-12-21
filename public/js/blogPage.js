'use strict';
const script = document.createElement(`script`);
script.src = `https://code.jquery.com/jquery-3.4.1.min.js`;
script.type = `text/javascript`;
document.getElementsByTagName(`head`)[0].appendChild(script);
console.log(`working!!!!`);
$(document).ready(() => {
  const submitBtnEl= $(`#submitBtn`);
  const titleInputEl= $(`#blogTitle`);
  const blogPostEl= $(`#blogPost`);

  submitBtnEl.on(`click`, () => {
    const blogPost = {
      title: titleInputEl.val().trim(),
      body: blogPostEl.val().trim()
    };
    if (!blogPost.title || !blogPost.body){
      return;
    }
    console.log(blogPost);
    $.post(`/api/blogPage`, blogPost).then(() => {
      console.log(`success blogpost sent to backend ${blogPost}`);
    } ).catch(err => {
      console.log(err.responseJSON);
    });
titleInputEl.val(``);
blogPostEl.val(``);
  });
});
