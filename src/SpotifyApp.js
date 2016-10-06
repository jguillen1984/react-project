import React from 'react'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-fetch'

import SearchForm from './SearchForm.js'
import SearchResults from './SearchResults.js'

const SpotifyApp = React.createClass({
  getInitialState: function() {
    return {
      showTab: null,
      isSearching: false,
      lastSearch: '',
      albums: [],
      artists: [],
      showError: true
    }
  },
  filterItemData: function(itemData) {
    return itemData.slice(0, 20).map(item => {
      return {
        url: item.external_urls.spotify,
        name: item.name,
        image: item.images[0] ? item.images[0].url : 'http://placehold.it/144x144?text=BLANK'
      }
    })
  },  
  newSearch: function(e) {
    e.preventDefault()
    let searchText = e.target.getElementsByTagName('input')[0].value

    // Dont proceed if search box is empty, or search term hasn't been updated since last search
    if (searchText.trim() === '' || searchText === this.state.lastSearch) return false

    this.setState({isSearching: true})

    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchText)}&type=artist,album`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    })
    .then((results) => {
      let albums = this.filterItemData(results.albums.items)
      let artists = this.filterItemData(results.artists.items)
      this.setState({
        showTab: this.state.showTab || 'artists',
        isSearching: false,
        lastSearch: searchText,
        albums: albums,
        artists: artists,
        showError: albums.length === 0 && artists.length === 0 ? 'No results found.' : false
      })
    }, () => {
      this.setState({
        isSearching: false,
        showError: 'Failed to fetch results.',
        albums: [],
        artists: []
      })
    })
  },
  setTab: function(showTab) {
    this.setState({
      showTab
    })
  },  
  render: function() {
    return (
      <div>
        <SearchForm newSearch={this.newSearch} isSearching={this.state.isSearching}/>
        <SearchResults setTab={this.setTab} {...this.state}/>
      </div>
    )
  }
})

export default SpotifyApp
