import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'
import CreateBook from './CreateBook.js'
import BookSearch from './BookSearch.js'

class App extends Component {
  state = {
    books : [],
    bookState : [
      {id: 'currentlyReading', name: 'Currently Reading'},
      {id: 'wantToRead', name: 'Want to Read'},
      {id: 'read', name: 'Read'},
      {id: 'none', name: 'None'}
    ]
  }

  componentDidMount(){
     BooksAPI.getAll().then((allBooks) => {
        this.setState((state) => ({books: allBooks}))
     })
  }

  moveTo = (movedBook, newState) => {
    //从服务器上获取的书籍使用服务器接口更新
    if (!movedBook.isCustom) {
      BooksAPI.update(movedBook, newState).then(
        this.moveBySelf(movedBook, newState)
      );
    } else { 
      //自行新增的书籍直接修改state中的shelf
      this.moveBySelf(movedBook, newState)
    }
  }

  moveBySelf = (movedBook, newState) => {
      let newBookArr = this.state.books.filter((book)=>book.id===movedBook.id);
      for (let newBook of newBookArr) {
        newBook.shelf = newState;
      }
      this.setState((state) => ({books : this.state.books.filter((book)=>book.id!==movedBook.id).concat(newBookArr)}));
  }

  search = (key) => {
    BooksAPI.search(key).then((filterBooks) => {
        this.setState((state) => ({books: filterBooks}));
    });
  }

  createBook = (book) => {
    book.authors = [book.author]
    book.id=book.title
    book.isCustom=true
    this.setState(state => ({
        books: state.books.concat([ book ])
    }))
  }

  render() {
    return (
      <div className="app">
      <BrowserRouter>
      <div>
        <Route exact path="/" render={()=>(
            <BookList
              books={this.state.books}
              bookState={this.state.bookState}
              onMoveTo={this.moveTo}
            />
        )} />
        <Route path="/search" render={()=>(
            <BookSearch
              books={this.state.books}
              bookState={this.state.bookState}
              onMoveTo={this.moveTo}
              onSearch={this.search}
            />
        )} />
        <Route path='/create' render={({ history }) => (
          <CreateBook
            onCreateBook={(book) => {
              this.createBook(book)
              history.push('/')
            }}
          />
        )}/>
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
