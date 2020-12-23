/* eslint-disable max-nested-callbacks */
/* eslint-disable camelcase */
/* eslint-disable no-magic-numbers */
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
  const postAreaEl= $(`#postArea`);
  $.get(`/api/blogPage`, {
    method: `GET`,
    headers: { 'Content-Type': `application/json` }
  })
    .then(res => {
      console.log(res);
      for(let i = 0 ; i < res.length; i++){
        const titleEl= $(`<h4>`);
        titleEl.text(res[i].title);
        const bodyEl = $(`<p>`);
        bodyEl.text(res[i].body);
        postAreaEl.append(titleEl);
        postAreaEl.append(bodyEl);
      }

    })
    .catch(err => console.log(err));
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
      $.get(`/api/blogPage`, {
        method: `GET`,
        headers: { 'Content-Type': `application/json` }
      })
        .then(res => {
          console.log(res);
          for(let i = 0 ; i < res.length; i++){
            const titleEl= $(`<h4>`);
            titleEl.text(res[i].title);
            const bodyEl = $(`<p>`);
            bodyEl.text(res[i].body);
            postAreaEl.append(titleEl);
            postAreaEl.append(bodyEl);
          }

        })
        .catch(err => console.log(err));
    } ).catch(err => {
      console.log(err.responseJSON);
    });
    titleInputEl.val(``);
    blogPostEl.val(``);


  });
});


