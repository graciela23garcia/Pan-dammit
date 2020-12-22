'use strict';
const script = document.createElement(`script`);
script.src = `https://code.jquery.com/jquery-3.4.1.min.js`;
script.type = `text/javascript`;
document.getElementsByTagName(`head`)[0].appendChild(script);
// eslint-disable-next-line strict
$(document).ready(() => {
  // Getting references to our form and input
  const submitBtnEl =$(`#submitBtn`);
  const emailInput = $(`#exampleInputEmail1`);
  const passwordInput = $(`#exampleInputPassword1`);
  // When the signup button is clicked, we validate the email and password are not blank
  submitBtnEl.on(`click`, event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    emailInput.val(``);
    passwordInput.val(``);
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(signUpData) {
    console.log(signUpData);
    $.post(`/api/signup`, signUpData)
      .then(() => {
        window.location.replace(`/welcome`);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
    // $.ajax({
    //   url:`/api/signup`,
    //   type:`POST`,
    //   data:signUpData,
    //   contentType:`application/json; charset=utf-8`,
    //   dataType:`json`
    // }).then(res => {
    //   window.location.replace(`/members`);
    // }).catch(handleLoginErr);
  }
  // eslint-disable-next-line no-unused-vars
  function handleLoginErr(err) {
    $(`#alert .msg`).text(JSON.stringify(err.responseJSON));
    // eslint-disable-next-line no-magic-numbers
    $(`#alert`).fadeIn(500);
  }
});
