import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class BookSearch extends Component {
  render() { 
    const { books, bookState, onMoveTo, onSearch } = this.props
    return (
      <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <Link className='close-search' to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(event)=>onSearch(event.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {books.map((curBook) => (
                  <li key={curBook.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: '128px', height: '190px', backgroundImage: `url(${curBook.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select value={curBook.shelf} onChange={(event)=>onMoveTo(curBook, event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            {bookState.map((state)=>(
                              <option key={state.id} value={state.id}>{state.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{curBook.title}</div>
                      <div className="book-authors">{curBook.authors ? curBook.authors.join(', ') : ''}</div>
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
