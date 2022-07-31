import React, { useState } from "react";
import axios from 'axios'

const UrlShortComp = () =>{

    const [Opendiv,setOpendiv] = useState(false)
    const [LinkToShort,setLinkToShort] = useState();
    const [result,setresult] = useState();

    const ShortenFunc = async () =>{
        let resp = await axios.get('https://api.shrtco.de/v2/shorten?url='+ LinkToShort)
        setOpendiv(!Opendiv)
        setresult(resp.data.result.full_short_link)
    }

    return(
        <div className="short-url-comp">
                <div className="input-wrapper">
                        <input type="text" className="data-input" placeholder="Shorten a link here..."
                        onChange={(e) => setLinkToShort(e.target.value)}  />
                    
                    <button onClick={ShortenFunc}>Shorten It!</button>
               
                
                </div>
            <div className={Opendiv ? 'shorten-result' : 'hidden'}>
                <a>{result}</a>
                <button>Copy</button>
            </div>
            
            
        </div>
    )
}
export default UrlShortComp