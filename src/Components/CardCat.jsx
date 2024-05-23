import React from "react";

function CardCat({ deleteCatList, item }) {
  return (
    <div className='card'> 
        <img src={item.img} alt="cat" />
        <label >{item.name}</label>
        <br/>
        <button onClick={() => deleteCatList(item.id)}>X</button>
    </div>
  );
}

export default CardCat;