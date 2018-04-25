import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'
import CreateBook from './CreateBook.js'
import BookSearch from './BookSearch.js'

class BooksApp extends Component {
  state = {
    books : [
        {
          title: 'To Kill a Mockingbird', 
          author: 'Harper Lee', 
          url: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
          readstate: 'currentlyReading'
        }, 
        {
          title: "Ender's Game", 
          author: 'Orson Scott Card', 
          url: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
          readstate: 'currentlyReading'
        }, 
        {
          title: '1776', 
          author: 'David McCullough', 
          url: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
          readstate: 'wantToRead'
        },
        {
          title: "Harry Potter and the Sorcerer's Stone", 
          author: 'J.K. Rowling', 
          url: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api',
          readstate: 'wantToRead'
        },
        {
          title: "The Hobbit", 
          author: 'J.R.R. Tolkien', 
          url: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
          readstate: 'read'
        },
        {
          title: "Oh, the Places You'll Go!", 
          author: 'Seuss', 
          url: 'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api',
          readstate: 'read'
        },
        {
          title: "The Adventures of Tom Sawyer", 
          author: 'Mark Twain', 
          url: 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api',
          readstate: 'read'
        }
    ],
    bookState : [
      {id: 'currentlyReading', name: 'Currently Reading'},
      {id: 'wantToRead', name: 'Want to Read'},
      {id: 'read', name: 'Read'},
      {id: 'none', name: 'None'}
    ]
  }

  // *********************************************************************
  // 由于使用代理也无法从https://reactnd-books-api.udacity.com读取书籍列表，
  // 所以此处做屏蔽处理，代码只做示意作用
  // *********************************************************************
  // ComponentDidMoun(){
  //    BooksAPI.getAll().then((allBooks) => {
  //      this.setState((state) => ({books: allBooks}));
  //    })
  // }

  moveTo = (selTitle, newState) => {
    let newBookArr = this.state.books.filter((book)=>book.title===selTitle);
    for (let newBook of newBookArr) {
      newBook.readstate = newState;
    }

    this.setState((state) => ({books : this.state.books.filter((book)=>book.title!==selTitle).concat(newBookArr)}));
  }

  createBook = (book) => {
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

export default BooksApp
