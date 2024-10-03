


'use client'
import react,{} from 'react'

const IFrame=({src})=>{

  return(
        <iframe width="100%" height="100%" src={src} 
        frameborder="0" allowfullscreen=''
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" >
        
        </iframe>
  )
}

export default IFrame;



