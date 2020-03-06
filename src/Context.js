import React, {useState, useEffect} from "react"


const Context = React.createContext()


function ContextProvider({children}) {
    const [quotes, setQuotes] = useState([])
    const [randomQuote, setRandom] = useState("Whatever the mind of man can conceive and believe, it can achieve.")
    const [author, setAuthor] = useState("Napoleon Hill")
    const [load, setLoad] = useState(false)

    const randomColor = require('randomcolor')

    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

    function changeQuote() {
        const idx = Math.floor((Math.random() * quotes.length) + 0)
    
        const random = quotes[idx].quote
        setRandom(random)
        
        const auth = quotes[idx].author
        setAuthor(auth)

        const rColor = randomColor()
        document.getElementById("root").style.backgroundColor = rColor
        document.getElementById("root").style.color = rColor
        document.getElementById("root").style.transition = "background-color 1s, color 1s"
        document.getElementById("new-quote").style.backgroundColor = rColor
        document.getElementById("new-quote").style.transition = "background-color 1s"
        document.getElementById("icon").style.color = rColor
        document.getElementById("icon").style.transition = "color 1s"
    }

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setQuotes(data.quotes))
        document.title = "Random Quote Machine"
        setLoad(true)
    }, [])

    return (
        <Context.Provider value={{randomQuote, author, changeQuote, load}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}