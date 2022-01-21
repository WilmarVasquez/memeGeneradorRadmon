import React from 'react';
import Header from './jeison_temporales/Header';
import Meme from './jeison_temporales/Meme' 


function App () {
    

    /*  const [jokeComment, setJokeComment] = React.useState(jokeData)
    const jokeElements = jokeComment.map(joke => (
        <Joke 
            key={joke.id}
            comment={joke.comment}
            punchline={joke.punchline}
            />
    )) */
 
    /* fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setSMmeGetData(data)) */


  

return (

        <div>
            <Header/>
            <Meme/>
        </div> 
         
       /*  <div>
           {jokeElements}
           /// <pre>{JSON.stringify(memeGetData, null, 2)}</pre>
        </div> */ 
                )
}

export default App