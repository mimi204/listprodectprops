import React from 'react'
import Item from "./Item"

const ItemList = ({ itemArray }) => {
    const handleClick =(name , price)=> alert(`${name} costs ${price}`)
    return (
        <>
<table className="table">
  <thead>
    <tr>
      <th scope="col">View</th>
      <th scope="col">Model</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
                </thead>   
     {itemArray.map((item) => <Item item={item} handleClick={handleClick}/>)}
                
</table>
        </>
    )
}

export default ItemList
