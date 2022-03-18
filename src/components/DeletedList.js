
const DeleteList = ({deletedList}) => {
    
    return ( 
        <div className="delete">
            <h1>Deleted Items</h1>
            {deletedList.map((i, index) =>{
                return <h2>{i}</h2>
            })}
        </div>
     );
}
 
export default DeleteList;