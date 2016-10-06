import React from 'react'
import ReactDOM from 'react-dom'

const SearchItem = (props) => {
  return (
    <li className='fade-in'>
      <a href={props.item.url} target='_blank'>
        <img src={props.item.image}></img>
        <span className='item-type'>{props.type}</span>
        <span className='item-name' href={props.item.url} target='_blank'>{props.item.name}</span>
      </a>
    </li>
  )
}

export default SearchItem