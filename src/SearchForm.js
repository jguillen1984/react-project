import React from 'react'
import ReactDOM from 'react-dom'

const SearchForm = (props) => {
  return (
    <form className='search-form' onSubmit={props.newSearch}>
      <input className='search-form__input' type='search' placeholder='Search artists and albums'/>
      <button disabled={props.isSearching} className='search-form__submit' type='submit'>
        {props.isSearching ? 'Searching' : 'Search'}
      </button>
    </form>
  )
}

export default SearchForm