'use strict';

console.log(`eureka!`);
$(document).ready(() => {
  const searchMovies= $(`#searchMovies`);
  const actionCheck = $(`#actionCheck`);
  const adventCheck = $(`#adventCheck`);
  const animeCheck = $(`#animeCheck`);
  const comedyCheck = $(`#comedyCheck`);
  const crimeCheck = $(`#crimeCheck`);
  const docCheck = $(`#docCheck`);
  const dramaCheck =$(`#dramaCheck`);
  const famCheck = $(`#famCheck`);
  const fantCheck = $(`#fantCheck`);
  const histCheck = $(`#histCheck`);
  const horrorCheck = $(`#horrorCheck`);
  const musicCheck = $(`#musicCheck`);
  const mystCheck = $(`#mystCheck`);
  const romCheck = $(`#romCheck`);
  const scifiCheck = $(`#scifiCheck`);
  const tvmCheck = $(`#tvmCheck`);
  const thrillCheck = $(`#thrillCheck`);
  const warCheck = $(`#warCheck`);
  const westCheck = $(`#westCheck`);


  searchMovies.on(`click`, () => {
    const blogPost = {
      title: titleInputEl.val().trim(),
      body: blogPostEl.val().trim()
    };
    if (!blogPost.title || !blogPost.body){
      return;
    }
    $.post (`/api/moviePage`, blogPost).then(() => {
      console.log(`Success movie search sent to backend ${movieSearch}`);
    } ).catch(err => {
      console.log(err.responseJSON);
    });

  });
});
// takes number of searches from database
// post request
// what we would need is an event listener on the search button
// anytime that someone searches for something, we send what they are searching to the
// post to the API Movie page
// what we are giving the api movie page is the genre
// line 64 app.get
// as soon as we go tot hte page, set an ajax call and that will account how many times someone will search for comedy
// gets a count of all the different genres in the database and returns it to us
