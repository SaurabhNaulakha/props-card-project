import React from 'react'
import {Bookmark} from 'lucide-react'

export const Card = (props) => {
  return (
     <div className="card">
                 <div className="top">
                     <img src= {props.brandLogo} alt="" />
                     <button>Save<Bookmark size={15} /></button>
                 </div>
             <div className="center">
                 <h3>{props.brandName} <span>{props.datePosted}</span></h3>
                 <h2>{props.category}</h2>
                 <div className='dialog'>
                   <h4 id='f1'>{props.tag1}</h4>
                   <h4 id='f2'>{props.tag2}</h4>
                 </div>
     
                 
             </div>
     
             <div className="bottom">
                   <div>
                       <h3>{props.chargePerHour}</h3>
                       <p>{props.location}</p>
                     </div>
                    <button>Apply now</button>
                     
                    </div>
     
     
             </div>
  )
}
