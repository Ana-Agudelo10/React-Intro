import React from 'react'
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
    return (
      <input 
      placeholder = "Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value); //Guardar el valor que escriben los usuarios en el input, en el estado y mostrandolo en el input de busqueda.
      }}/>
    );
  }
  
export { TodoSearch };