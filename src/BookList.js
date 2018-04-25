import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class BookList extends Component {
  render() { 
    const { books, bookState, onMoveTo } = this.props
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {bookState.filter((curState)=>curState.id!=='none').map(curBookState => (
                  <div className="bookshelf" key={curBookState.id}>
                    <h2 className="bookshelf-title">{curBookState.name}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {books.filter((curBook) => curBook.readstate === `${curBookState.id}`).map((curBook) => (
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
                  ))}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Search</Link>
            </div>
            <div className="add-book">
              <Link to='/create'>Add book</Link>              
            </div>
          </div>
      </div>
    )
  }
}

export default BookList
