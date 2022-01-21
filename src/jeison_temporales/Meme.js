import React from "react";


function Meme (){   
    const [meme, setMeme] = React.useState({
        topText: "",
        buttonText: "",
        randomImage: "",
    })

    const [allMemesImages, setAllMemeImages] = React.useState([])

    React.useEffect ( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

function getMemeImage (){
    const randomNumber = Math.floor(Math.random()* allMemesImages.length)
    const url = allMemesImages[randomNumber].url
    setMeme (prevMeme => ({ 
        ...prevMeme,
        randomImage: url
    }))
   
}

function chupelo(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value 
    }))
}

    return (
        <main className="main">
            <div className="form">
                <input 
                        className="inp1" 
                        type="text" 
                        placeholder="Top text" 
                        name="topText" 
                        value={meme.topText} 
                        onChange={chupelo}/>

                <input 
                        className="inp1" 
                        type="text" 
                        placeholder="Button text" 
                        name="buttonText" 
                        value={meme.buttonText}
                        onChange={chupelo}
                        />

                <button onClick={getMemeImage} className="button">Get a new image 🖼</button>
            </div>
            <div className="meme-section">
                <h2 className="meme-text-top">{meme.topText}</h2>
                <img src={meme.randomImage} className="meme" alt=""></img>
                <h2 className="meme-text-button">{meme.buttonText}</h2>
            </div>

            
        </main>
    )
}

export default Meme