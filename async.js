/*USING AXIOS https://github.com/axios/axios*/

/*axios.get('http://www.omdbapi.com/?t=Joker&y=2019&apikey=36827e98').then(result => {
    console.log(result);
}).catch();

axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});*/

/*USING ASYNC AWAIT*/

async function getMovie() {
  try {
    const response = await axios.get('http://www.omdbapi.com/?t=Joker&y=2019&apikey=36827e98');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getMovie();
