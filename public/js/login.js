'use strict';

const script = document.createElement(`script`);
script.src = `https://code.jquery.com/jquery-3.4.1.min.js`;
script.type = `text/javascript`;
document.getElementsByTagName(`head`)[0].appendChild(script);

$(document).ready(() => {


  const loginBtnEl = $(`#loginBtn`);
  const usernameLogin = $(`#exampleInputEmail1`);
  const passwordLogin = $(`#exampleInputPassword1`);

  loginBtnEl.on(`click`, event => {
    event.preventDefault();
    const userData = {
      username: usernameLogin.val().trim(),
      password: passwordLogin.val().trim()
    };

    if (!userData.username || !userData.password) {
      return ;
    }

    loginUser(userData.username, userData.password);
    usernameLogin.val(``);
    passwordLogin.val(``);
  });

  function loginUser(name, password) {

    console.log(`Login here ${name} ${password}`);
    $.post(`/api/login`, {
      name,
      password
    })
      .then(() => {
        window.location.replace(`/welcome`);
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr() {
    const numFadeMs = 500;
    $(`#alert .msg`).text(`Wrong credentials!`);
    $(`#alert`).fadeIn(numFadeMs);
  }

});
