'use client'
import NavBar from "../../component/nav"
import '../../../app/globals.css'
import '../page.css'
const About=()=>{

    return(
       
    <div>
         <NavBar/>
         <div className="main-page">
          <div className="content">
            <div className="about-info">
            <p className="abt-header">KNOW US </p>
           <ol style={{fontSize:16}}>
           <li>We serve free and paid live TV streaming</li> 
           <li>Affordable and premium service</li> 
           <li>Our application is easy to use</li> 
           <li>Connect to Android TV and phone and enjoy :)</li> 

           </ol>
            </div>
          

          </div>
         
         </div>
       
    </div>
  )

} 
export default About
