
const Display = ( {toDo, removeHandler} ) => {
    return ( 
        <div>
             <ul>
        {toDo.map((x, i) => (
          <li key={i}> {x}
            <button onClick={() => removeHandler(i)}>Done</button>
          </li>
        ))}
      </ul>
        </div>
     );
}
 
export default Display;