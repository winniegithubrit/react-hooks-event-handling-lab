// Code Keypad Component Here

function Keypad (){
    return (
        <div>
          <input onChange={handlePassword} 
          type="password"/>  
        </div>
    )
}
function handlePassword(){
  console.log('Entering password...')}

export default Keypad;