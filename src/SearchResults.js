import React from 'react'
import ReactDOM from 'react-dom'

import SearchItem from './SearchItem.js'

const SearchResults = (props) => {
  return (
    <div>
      <div className={`${props.showError || 'hidden'} no-results fade-in`}>
        {props.showError}
      </div>
      <div className={`${!props.showError || 'hidden'} search-results`}>
        <div className='search-results__tabs'>
          <span onClick={props.setTab.bind(null, 'artists')} className={props.showTab === 'artists' || 'faded'}>
            Artists
          </span>
          <span onClick={props.setTab.bind(null, 'albums')} className={props.showTab === 'albums' || 'faded'}>
            Albums
          </span>
        </div>
        <ul className={`${props.showTab === 'artists' || 'hidden'} search-results__list`}>
          {props.artists.map((item, index) => <SearchItem key={index} type='Artist' item={item}/>)}          
        </ul>
        <ul className={`${props.showTab === 'albums' || 'hidden'} search-results__list`}>
          {props.albums.map((item, index) => <SearchItem key={index} type='Album' item={item}/>)}
        </ul>
      </div>
    </div>
  )
}

export default SearchResults