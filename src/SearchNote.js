import React from 'react';

const SearchNote = ({ setSearch,search }) => {
  return (
    <form className='search-container' onSubmit={(e)=>e.preventDefault()}>
        <input type="text" role='searchbox' className='serch-box' value={search} placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
    </form>
  )
}

export default SearchNote