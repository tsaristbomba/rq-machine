import React, {useContext} from "react"
import {Context} from "./Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'


export default function Quote() {
    const {randomQuote, author, changeQuote} = useContext(Context)

    return (
            <body>
                <div id="quote-box">
                    <q id="text">{randomQuote}</q>
                    <p id="author">{"- " + author}</p>
                    <div className="btns-wrapper">
                        <a 
                        id="tweet-quote" 
                        href="twitter.com/intent/tweet"
                        ><FontAwesomeIcon id="icon" icon={faTwitterSquare}/></a>
                        <button 
                        onClick={changeQuote} 
                        id="new-quote">New Quote</button>
                    </div>
                </div>
            </body>
    )
}