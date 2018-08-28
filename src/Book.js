import React, { Component } from 'react';

class Book extends Component{
    render() {
        // Checking if the book have proper thumbnail to display
        let displayedThumbnail;
        if (this.props.book.imageLinks) {
            displayedThumbnail = this.props.book.imageLinks.thumbnail;
        } else {
            displayedThumbnail = '';
        }

        const thumbnailStyle = {
            width: 128,
            height: 193,
            backgroundImage: `url(${displayedThumbnail})`
        };

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={thumbnailStyle}></div>
                    <div className="book-shelf-changer">
                        <select
                            defaultValue={this.props.book.shelf || 'none'}
                            onChange={(event) => this.props.changeBookShelf(this.props.book, event.target.value)}
                            value={this.props.currentShelf}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="read">Read</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    }
}

export default Book;
