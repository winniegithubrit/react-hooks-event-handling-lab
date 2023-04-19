// Code EyesOnMe Component Here
function EyesOnMe(){
  return(
    <div>
      <button 
      onBlur={()=>console.log('Hey! Eyes on me!')}
      onFocus={()=>console.log('Good!')}
      
      >
       Eyes on me 
      </button>
    </div>
  )
}

//function handleEyes(){
 // console.log("Hey! Eyes on me! ")
//}
//function handleBlur(){
 // console.log("Good")
//}






export default EyesOnMe