import React from 'react'

const Item = ({ item , handleClick }) => {

    return (
        <>
          
    <tr>
     <th scope="row" ><button class="btn btn-outline-dark" onClick={()=>handleClick(item.name , item.price)} >Product details</button></th>
     <td><img src={item.imgSrc} alt={item.name} style={{width:"200px"}} /></td>
      <td><h4>{item.name}</h4></td>
    <td><h4>{item.price}</h4></td>
            </tr>
            

        </>
    )
}

export default Item
