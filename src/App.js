import React from 'react';
import MainPage from './MainPage';
import Search from './Search';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Footer from './Footer';
import './App.css';

class BooksApp extends React.Component {
    // Let's store books data
    state = {
        books: []
    }
    // Receiving the initial set of books from backend server
    componentDidMount() {
        this.fetchAllBooks();
    }

    fetchAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    // Updating the current book's shelf positioning
    changeBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        this.componentDidMount();
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    // Data is being passed through to the child component - MainPage
                    <MainPage books={this.state.books} changeBookShelf={this.changeBookShelf} /> )}
                />
                <Route path="/search" render={() => (
                    // Data is being passed through to the child component - Search
                    <Search books={this.state.books} changeBookShelf={this.changeBookShelf} /> )}
                />
                <Footer />
            </div>
        );
    }
}

export default BooksApp
