import  { useState } from 'react'
import './searchbar.scss'

const types = ['buy','rent'];


function SearchBar() {

  const [query,setQuery] = useState ({
    type: 'Buy',
    location: '',
    minPrice: 0,
    maxPrice:0,
  });

const switchType = (val)=>{
setQuery((prev)=> ({...prev, type: val}));
}

  return (
    <div className="searchBar">
      <div className="type">
      {types.map((type)=>(

      <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>{type}</button>
      ))}

      </div>
     
      
      <form>
        <input type="text" name="Location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000}
          placeholder="Min price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar