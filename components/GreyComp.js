import React from "react";
import Recognition from './images/icon-brand-recognition.svg'
import Records from './images/icon-detailed-records.svg'
import Customizable from './images/icon-fully-customizable.svg'
import UrlShortComp from './UrlShortComp'
const GreyComp = () =>{

    return(
        <div className="grey">
                    <UrlShortComp/>
                <h1 className="grey-title">Advanced Statistics</h1>
                <p className="grey-top-block">Track how your links are performing across 
                    the web with our advanced statistics dashboard.
                </p>
             <div className="boxes">
                <div className="box box1">
                    <div className="symbol">
                        <img src={Recognition} alt/>
                    </div>
                        
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing.
                             Branded links help instil confidence in your content.</p>
                    
                </div>
                <div className="box box2">
                    <div className="symbol">
                        <img src={Records}/>
                    </div>
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage 
                            with your content helps inform better decisions.</p>
                    
                </div>
                <div className="box box3">
                    <div className="symbol">
                        <img src={Customizable}/>
                    </div>
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable links, 
                            supercharging audience engagement.</p>
                </div>
              </div>
        </div>
    )
}
export default GreyComp;
/*
<div className="boxes">
                    <div className="box">
                        
                        <div>
                        <img src={Recognition} alt=''/>
                        </div>
                        
                        
                    </div>
                  
            </div>  
*/