# Spotify View

### Usage
Simply opening ``index.html`` in the browser should work

### File Structure
All React components are in ``/src/``, and the transpiled version is ``/dist/app.min.js``. Stylesheets and images are in ``/assets/``.

### Application Structure
```
App.js
|__ SpotifyApp
    |__ SearchForm
    |__ SearchResults
        |__ SearchItem
        |__ SearchItem
```

### Other Notes
1. The application uses a library called [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) to make async AJAX requests