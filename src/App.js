import React from 'react';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
          <MainPage />
          {/* <SearchPage /> */}
      </div>
    )
  }
}

export default BooksApp
