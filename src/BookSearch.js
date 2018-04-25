import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import './App.css'

class BookSearch extends Component {
  state = {
    query : ''
  }

  search = (key) => {
    this.setState((state) => ({query: key}));
  }

  render() { 
    const { books, bookState, onMoveTo } = this.props
    let showingBooks;
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingBooks = books.filter(function(book) {
        return match.test(book.title) || match.test(book.author);
      });
    } else {
      showingBooks = books;
    }
    return (
      <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <Link className='close-search' to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={(event)=>this.search(event.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {showingBooks.map((curBook) => (
                  <li key={curBook.title}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: '128px', height: '190px', backgroundImage: `url(${curBook.url})` }}></div>
                        <div className="book-shelf-changer">
                          <select value={curBook.readstate} onChange={(event)=>onMoveTo(`${curBook.title}`, event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            {bookState.map((state)=>(
                              <option key={state.id} value={state.id}>{state.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{curBook.title}</div>
                      <div className="book-authors">{curBook.author}</div>
                    </div>
                  </li>                        
                  ))}
              </ol>
            </div>
          </div>
        </div>
      )
  }
}

export default BookSearch
