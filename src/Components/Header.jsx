import React from "react";
import axios from 'axios';
function Header({ handleAddCatList }) {

    return (<div className='header'>
        <h1>Catty Gallery</h1>
        <button onClick={handleAddCatList} className='addCat'> <span>Add A New Cat </span></button>
        </div>
    )
}

export default Header;