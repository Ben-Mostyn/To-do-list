

const Input = ( { addHandler, handleClick  } ) => {
 
    return ( 
        <div>
            <input 
            className="input"
            onChange={addHandler}
        placeholder="what do you need"
        name="input" 
        type="text" />
            <button className="submit" onClick={handleClick}>Submit</button>
            
    
        </div>
            
     );
}
 
export default Input;