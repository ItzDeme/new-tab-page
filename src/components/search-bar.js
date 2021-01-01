import React from 'react';


const SearchBar = () => {
    return(
        <div className="justify-content-center search-container">
        <form className="form-inline md-form form-sm mt-0 text-center justify-content-center" action="https://www.google.com/search" metho="GET">
          <input className="form-control form-control-sm ml-3 w-75 search-bar" type="text" name="q" placeholder="Search" aria-label="Search" autocomplete="off"/>
        </form>
       </div>
    );
}

export default SearchBar;