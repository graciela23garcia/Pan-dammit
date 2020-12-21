'use strict';

const script = document.createElement(`script`);
script.src = `https://code.jquery.com/jquery-3.4.1.min.js`;
script.type = `text/javascript`;
document.getElementsByTagName(`head`)[0].appendChild(script);

$(document).ready(() => {
  const searchMovies= $(`#searchMovies`);
  const actionRadio = $(`#actionRadio`);
  const adventRadio = $(`#adventRadio`);
  const animeRadio = $(`#animeRadio`);
  const comedyRadio = $(`#comedyRadio`);
  const crimeRadio = $(`#crimeRadio`);
  const docRadio = $(`#docRadio`);
  const dramaRadio =$(`#dramaRadio`);
  const famRadio = $(`#famRadio`);
  const fantRadio = $(`#fantRadio`);
  const histRadio = $(`#histRadio`);
  const horrorRadio = $(`#horrorRadio`);
  const musicRadio = $(`#musicRadio`);
  const mystRadio = $(`#mystRadio`);
  const romRadio = $(`#romRadio`);
  const scifiRadio = $(`#scifiRadio`);
  const tvmRadio = $(`#tvmRadio`);
  const thrillRadio = $(`#thrillRadio`);
  const warRadio = $(`#warRadio`);
  const westRadio = $(`#westRadio`);

  fetch (`/api/moviePage`).then(res => {
    console.log(`Success movie search retrieved from backend ${res}`);
  } ).catch(err => {
    console.log(err.responseJSON);
  });

  searchMovies.on(`click`, () => {
    // eslint-disable-next-line quotes
    console.log($('input[name="radio"]:checked').val());
    // post request
    const genreSelection = {
      // eslint-disable-next-line quotes
      genre: $('input[name="radio"]:checked').val()
    };
    if (!genreSelection.genre){
      return;
    }
    $.post (`/api/moviePage`, genreSelection).then(() => {
      console.log(`Success movie search sent to backend ${genreSelection}`);
    } ).catch(err => {
      console.log(err.responseJSON);
    });

  });
});
// takes number of searches from database

// what we would need is an event listener on the search button
// anytime that someone searches for something, we send what they are searching to the
// post to the API Movie page
// what we are giving the api movie page is the genre
// line 64 app.get
// as soon as we go to the page, set an ajax call and that will account how many times someone will search for comedy
// gets a count of all the different genres in the database and returns it to us
