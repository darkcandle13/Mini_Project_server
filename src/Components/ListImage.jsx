import React from "react";
import CardCat from "./CardCat"; // Ensure the correct component name

function ListImage({ deleteCatList, data }) {
  return (
    <div className='list_image'>
      {data.map(item => (
        <CardCat key={item.id} deleteCatList={deleteCatList} item={item} />
      ))}
    </div>
  );
}

export default ListImage;