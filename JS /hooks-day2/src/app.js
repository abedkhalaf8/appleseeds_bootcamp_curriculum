import React, {useEffect, useState} from 'react';

import axios from 'axios';

// Instructions
// Lets do a simple fetch calling the star wars api to get a
// specific movie.
// We will be using this URL
// https://swapi.co/api/films/1/
// 1. Call the API when the component mounts on the screen.
// 2. Display the movies title and director.

const App = () => {
    const [response, setResponse] = useState('')
    useEffect(() => {
      axios.get(`https://swapi.dev/api/films/`)
        .then(res => {
          const data = res.data;
          setResponse(data.results)
        })
 }, []);

const list = () => {
    const newarr = [];
    for (let i = 0; i < response.length; i++) {
       newarr.push(<li key={i}>title: {response[i].title} director: {response[i].director}</li>)
        
    }
    return newarr;
}

return (
       <div>
        <ul>
            {list()}
        </ul>
       </div>
   )

}
export default App;