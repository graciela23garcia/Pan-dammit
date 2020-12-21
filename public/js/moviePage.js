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
  // make url before this line of code.user will select action that equals ID *i.e. 12*. Fetch will be inside the event listener.
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
    // things that i will be doing  going to be inside this event listener
    let genreID=``;
    switch (genreSelection.genre) {
    case `Action`:
      genreID=35;
      break;
    case `Adventure`:
      genreID=35;
      break;
    case `Comedy`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
    case `Crime`:
      genreID=35;
      break;
      default: genreID=35;
        }
    const queryUrl=`https://api.themoviedb.org/3/discover/movie?api_key=38250e9d78b145164a32b58987b0d9ce&l[…]clude_adult=false&include_video=false&page=1&with_genres=${genreID}`;
    fetch (queryUrl).then(res =>{
      console.log(res);
    });
    // //template literal above -- that is basically taking whatever the variable equals. I can create variable, i.e. query.url and it would pretty much look like
    //
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
