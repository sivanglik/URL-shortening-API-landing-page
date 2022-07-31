import react from 'react'
import './App.css'
import Working_Image from './images/illustration-working.svg'
const LeftHeader = () =>{

    return(
 <div className='bottom-header'>
         <div className='grid'>
                 <div className='left-bottom-header'>
                    <div className='left-bottom-header-content'>
                        <h1 className='left-title'>More than just shorter links</h1>
                        <p className='left-text'>Build your brand's recognition and get detailed
                        insights on how your links are performing
                        </p>
                        <button >Get Started</button>
                    </div>
                     
                 </div>
                 <div className='right-bottom-header'>
                        <img  src={Working_Image} alt=''/>
                 </div>
         </div>
</div>
    )
}
export default LeftHeader