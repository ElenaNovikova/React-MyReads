import React from 'react';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';
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
    }

    render() {
        /*console.log(this.state.books);*/
        return (
            <div className="app">
                <MainPage
                    books={this.state.books}
                    moveShelf={this.moveShelf}
                />
                {/* <SearchPage /> */}
            </div>
        )
    }
}

export default BooksApp
