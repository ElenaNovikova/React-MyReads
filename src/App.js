import React from 'react';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Footer from './Footer';
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    }
    // Receiving the initial set of books from backend server
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    moveShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    render() {
        return (
            <div className="app">
              <Route exact path="/" render={() => (
                  <MainPage
                      books={this.state.books}
                      moveShelf={this.moveShelf}
                  />
                )}
              />
              <Route path="/search" render={() => (
                  <SearchPage
                      moveShelf={this.moveShelf}
                      books={this.state.books}
                  />
                )}
              />
              <Footer />
            </div>
        )
    }
}

export default BooksApp
