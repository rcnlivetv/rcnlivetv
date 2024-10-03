
import './styles/myinput.css'
 
const MyInput=({label=false,title='Button',onChange,value})=>{

   return(
       <div className='inputField'>
         {label==true?<label>{title}</label>:''}<br/>
         <input type='text' onChange={onChange} placeholder={title} value={value}/><br/>
       </div>
   )
    

}

export default MyInput