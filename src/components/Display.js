import { motion } from 'framer-motion';


const Display = ( {toDo, removeHandler} ) => {
    return ( 
        <div>
             <ul>
        {toDo.map((x, i) => (
          <motion.li key={i}
          className="list"
          initial={{
            opacity: 0,
            x:-100,
            y: -100,
            scale: 0
          }}
           animate={{
             opacity: 1,
             color: '#575f64',
             y: 0,
             x: 100,
             scale: 1
             }} 

            transition={{
              ease: "easeIn"
            }}

           whileHover={{
             scale: .95,
             opacity: .8,
             color: 'black'
           }}  
             > {x}
            <button className='done' onClick={() => removeHandler(i)}>Done</button>
          </motion.li>
        ))}
      </ul>
        </div>
     );
}
 
export default Display;