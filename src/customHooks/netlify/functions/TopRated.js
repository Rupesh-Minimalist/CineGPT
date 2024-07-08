const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
      headers: {
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzViNWEzNGY0MTBmZDg0YTM0YmQ1MGVjNGU2ZmM2NCIsIm5iZiI6MTcyMDQyNjY5My4xMTgzNTIsInN1YiI6IjY2NTk4ZWQzOWNkNDFiMjg3YTk0MDk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Uj6pcI3xhdvxgSC4iOm5si3YsNRHiAjGUdnG2FS4eE'
      }
    });
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
